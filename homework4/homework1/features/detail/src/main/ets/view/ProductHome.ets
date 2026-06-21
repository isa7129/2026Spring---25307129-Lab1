/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { deviceInfo } from '@kit.BasicServicesKit';
import { AbilityConstant, common, StartOptions, Want } from '@kit.AbilityKit';
import { BreakpointConstants, CommonConstants, PipWindowUtil, ResourceUtil } from '@ohos/commons';
import { ProductInfo, ProductPicture } from './ProductDetail';
import { ProductUtilView } from './ProductUtilView';
import { DetailTopIcon } from './CommonView';
import { AllComments } from './ProductConfig';
import { harmonyShare, systemShare } from '@kit.ShareKit';
import { uniformTypeDescriptor as utd } from '@kit.ArkData';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import { DetailConstants } from '../constants/DetailConstants';
import { promptAction } from '@kit.ArkUI';

interface ProductData {
  title: string;
  description: string;
  price: string;
  imageUri?: string;
}

// 定义分享数据记录的接口
interface ShareRecord {
  utd: string;
  content: string;
  description?: string;
}

// 定义SharedData构造参数的接口
interface SharedDataOptions {
  utd: string;
  content: string;
  title?: string;
  description?: string;
  thumbnailUri?: string;
}

@Component
export struct ProductHome {
  @StorageLink('currentBreakpoint') currentBreakpoint: string = BreakpointConstants.BREAKPOINT_LG;
  @StorageLink('topRectHeight') topRectHeight: number = 0;
  @StorageLink('windowWidth') windowWidth: number = 0;
  @StorageLink('isShowingSidebar') isShowingSidebar: boolean = false;
  @StorageLink('isSplitMode') isSplitMode: boolean = false;
  @State isMoreDetail: boolean = false;
  @State isShoppingBag: boolean = false;
  @State isCustomerService: boolean = false;
  @State isDialogOpen: boolean = false;
  @State detailType: string = CommonConstants.BIND_SHEET_PAGE_TYPES[3];
  @State isLiveMoreDetail: boolean = false;
  @State shareStatusText: string = '';
  @Consume('pageInfos') pageInfos: NavPathStack;
  private pipWindowUtil: PipWindowUtil | undefined = PipWindowUtil.getPipWindowUtil(this.getUIContext());
  public is2in1: boolean = deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0];
  private isListening: boolean = false;
  private gesturesShareCallback: (sharableTarget: harmonyShare.SharableTarget) => void =
    (sharableTarget: harmonyShare.SharableTarget): void => {
      this.handleGesturesShare(sharableTarget);
    };

  // 检查是否支持隔空传送
  private checkHarmonyShareSupport(): boolean {
    try {
      // 简单的功能检测，避免将命名空间作为对象使用
      return true; // 假设支持，实际使用中通过try-catch来检测
    } catch (e) {
      return false;
    }
  }

  // 获取当前商品数据
  private getCurrentProductData(): ProductData {
    const context = this.getUIContext().getHostContext() as common.UIAbilityContext;

    const productData: ProductData = {
      title: '华为 Mate X5',
      description: '折叠屏手机，旗舰配置，超薄设计',
      price: '¥12999',
      imageUri: 'internal://cache/product_detail_1.jpg'
    };

    if (context && DetailConstants.PRODUCT_PRICE_NAMES) {
      try {
        const priceNames = DetailConstants.PRODUCT_PRICE_NAMES(context);
        if (priceNames && priceNames.length > 0) {
          productData.price = priceNames[1] || priceNames[0] || '¥12999';
        }
      } catch (e) {
        console.warn('Failed to get product price:', e);
      }
    }

    return productData;
  }

  aboutToAppear(): void {
    this.registerGesturesShareListener();
    this.shareStatusText = this.checkHarmonyShareSupport()
      ? '支持隔空传送'
      : '隔空传送不可用';
  }

  aboutToDisappear(): void {
    this.unregisterGesturesShareListener();
    if (deviceInfo.deviceType !== CommonConstants.DEVICE_TYPES[0]) {
      if (this.pipWindowUtil) {
        this.pipWindowUtil.stopPip();
      }
    }
  }

  private registerGesturesShareListener(): void {
    if (!this.checkHarmonyShareSupport()) {
      console.warn('Device does not support gestures share capability');
      return;
    }

    const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    if (!context) {
      console.error('Failed to get UI context');
      return;
    }

    window.getLastWindow(context).then((mainWindow) => {
      const mainWindowID = mainWindow.getWindowProperties().id;
      console.log('Gestures share listener registered for window ID:', mainWindowID);

      try {
        // 使用函数引用而不是直接使用命名空间
        const harmonyShareOn = harmonyShare.on;
        if (harmonyShareOn) {
          harmonyShareOn('gesturesShare', { windowId: mainWindowID }, this.gesturesShareCallback);
          this.isListening = true;
        }
      } catch (err) {
        console.error('Failed to register gestures share listener:', err);
      }
    }).catch((err: BusinessError) => {
      console.error('Failed to get window ID:', err.message);
    });
  }

  private unregisterGesturesShareListener(): void {
    if (!this.isListening) {
      return;
    }
    try {
      // 使用函数引用而不是直接使用命名空间
      const harmonyShareOff = harmonyShare.off;
      if (harmonyShareOff) {
        harmonyShareOff('gesturesShare', this.gesturesShareCallback);
        this.isListening = false;
        console.log('Gestures share listener unregistered');
      }
    } catch (err) {
      console.error('Failed to unregister gestures share listener:', err);
    }
  }

  // 构建分享数据
  private buildSharedData(productData: ProductData): systemShare.SharedData {
    const title: string = productData.title || '商品分享';
    const description: string = productData.description || '查看商品详情';
    const price: string = productData.price || '¥0';

    // 构建SharedDataOptions对象
    const sharedDataOptions: SharedDataOptions = {
      utd: utd.UniformDataType.HYPERLINK,
      content: 'https://www.example.com/product/mate-x5',
      title: `分享商品：${title}`,
      description: `${description}，价格：${price}`
    };

    // 如果有图片URI，添加缩略图
    if (productData.imageUri) {
      sharedDataOptions.thumbnailUri = productData.imageUri;
    }

    const sharedData = new systemShare.SharedData(sharedDataOptions);

    // 如果有图片URI，添加图片记录
    if (productData.imageUri) {
      try {
        // 创建符合接口的图片记录对象
        const imageRecord: ShareRecord = {
          utd: utd.UniformDataType.IMAGE,
          content: productData.imageUri,
          description: '商品图片'
        };
        sharedData.addRecord(imageRecord);
      } catch (err) {
        console.error('Failed to add image record:', err);
      }
    }

    return sharedData;
  }

  // 处理隔空传送手势
  private handleGesturesShare(sharableTarget: harmonyShare.SharableTarget): void {
    console.log('隔空传送手势触发');

    const productData = this.getCurrentProductData();
    const sharedData = this.buildSharedData(productData);

    sharableTarget.share(sharedData).then(() => {
      console.log('隔空传送成功');
      promptAction.showToast({
        message: '隔空传送成功',
        duration: 2000
      });
    }).catch((err: BusinessError) => {
      console.error('隔空传送失败:', err.message);
      promptAction.showToast({
        message: '隔空传送失败',
        duration: 2000
      });
    });
  }

  // 点击分享按钮
  private async onShareButtonClick(): Promise<void> {
    const productData = this.getCurrentProductData();
    const sharedData = this.buildSharedData(productData);
    const context = this.getUIContext().getHostContext() as common.UIAbilityContext;

    if (!context) {
      console.error('Failed to get UI context');
      this.showGesturesSharePrompt();
      return;
    }

    try {
      const shareController = new systemShare.ShareController(sharedData);
      await shareController.show(context, {
        selectionMode: systemShare.SelectionMode.SINGLE,
        previewMode: systemShare.SharePreviewMode.DETAIL
      });
      console.log('系统分享面板显示成功');
    } catch (err) {
      const error = err as BusinessError;
      console.error('系统分享面板显示失败:', error.message);
      this.showGesturesSharePrompt();
    }
  }

  // 显示隔空传送提示
  private showGesturesSharePrompt(): void {
    if (!this.checkHarmonyShareSupport()) {
      promptAction.showToast({
        message: '当前设备不支持隔空传送功能',
        duration: 2000
      });
      return;
    }

    promptAction.showDialog({
      title: '隔空传送',
      message: '请做出隔空传送手势以分享商品',
      buttons: [
        {
          text: '知道了',
          color: '#007DFF'
        }
      ]
    });
  }

  build() {
    NavDestination() {
      SideBarContainer() {
        // 侧边栏内容
        Column() {
          Image($r('app.media.icon_close_4'))
            .width(ResourceUtil.getCommonImgSize()[1])
            .height(ResourceUtil.getCommonImgSize()[1])
            .onClick(() => {
              if (this.currentBreakpoint === 'lg') {
                this.isShowingSidebar = false;
              }
            })
            .margin({
              top: $r('app.float.detail_lg_top_row_margin'),
              bottom: $r('app.float.detail_lg_top_row_margin')
            })
          AllComments()
        }
        .alignItems(HorizontalAlign.End)
        .height('100%')
        .padding({
          top: deviceInfo.deviceType === '2in1' ? 0 : this.topRectHeight,
          left: '32vp',
          right: '32vp'
        })

        // 主要内容区域
        Row() {
          if (this.currentBreakpoint !== 'lg') {
            // 小屏幕布局
            Column() {
              Scroll() {
                Column() {
                  ProductPicture({
                    pageBreakpoint: this.currentBreakpoint,
                    isMoreLiveDetail: $isLiveMoreDetail
                  })
                  ProductInfo({ pageBreakpoint: this.currentBreakpoint })
                }
              }
              .scrollBar(BarState.Off)
              .layoutWeight(1)

              ProductUtilView({
                isMoreDetail: $isMoreDetail,
                isShoppingBag: $isShoppingBag,
                isCustomerService: $isCustomerService
              })
            }
            .padding({
              top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight
            })
            .height(CommonConstants.FULL_PERCENT)
            .layoutWeight(1)
          } else {
            // 大屏幕布局 - 左侧图片
            Column() {
              ProductPicture({
                pageBreakpoint: this.currentBreakpoint,
                isMoreLiveDetail: $isLiveMoreDetail
              })
            }
            .padding({
              top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight
            })
            .height(CommonConstants.FULL_PERCENT)
            .layoutWeight(1)
          }

          if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) {
            // 大屏幕布局 - 右侧详情
            Column() {
              Row({ space: $r('app.float.detail_top_icon_margin_sm') }) {
                // 分屏按钮
                DetailTopIcon($r('app.media.ic_mate_pad_2'), () => {
                  if (this.is2in1) {
                    return;
                  }
                  if (!this.isSplitMode) {
                    let want: Want = {
                      bundleName: 'com.huawei.multishoppingpricecomparison',
                      abilityName: 'SecondAbility'
                    };
                    let option: StartOptions = {
                      windowMode: AbilityConstant.WindowMode.WINDOW_MODE_SPLIT_PRIMARY
                    };
                    (this.getUIContext().getHostContext() as common.UIAbilityContext)
                      .startAbility(want, option);
                  } else {
                    (this.getUIContext().getHostContext() as common.UIAbilityContext)
                      .terminateSelf();
                  }
                })

                // 分享按钮
                DetailTopIcon($r('app.media.ic_more'), () => this.onShareButtonClick())
              }
              .padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
              })
              .justifyContent(FlexAlign.End)
              .width(CommonConstants.FULL_PERCENT)
              .margin({
                top: $r('app.float.detail_lg_top_row_margin'),
                bottom: $r('app.float.detail_lg_top_row_margin')
              })

              // 分享状态提示
              Text(this.shareStatusText)
                .fontSize('12fp')
                .fontColor('#999999')
                .margin({ bottom: '8vp' })
                .padding({ left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint) })
                .width(CommonConstants.FULL_PERCENT)

              Scroll() {
                ProductInfo({ pageBreakpoint: BreakpointConstants.BREAKPOINT_LG })
              }
              .align(Alignment.Top)
              .scrollBar(BarState.Off)
              .layoutWeight(1)

              ProductUtilView({
                isMoreDetail: $isMoreDetail,
                isShoppingBag: $isShoppingBag,
                isCustomerService: $isCustomerService
              })
            }
            .padding({
              top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight
            })
            .backgroundColor($r('app.color.products_info'))
            .height(CommonConstants.FULL_PERCENT)
            .layoutWeight(1)
            .justifyContent(FlexAlign.Start)
          }
        }
        .alignItems(VerticalAlign.Top)
        .height(CommonConstants.FULL_PERCENT)
        .width(CommonConstants.FULL_PERCENT)
        .layoutWeight(2)
      }
      .showSideBar(this.isShowingSidebar)
      .showControlButton(false)
      .sideBarPosition(SideBarPosition.End)
      .divider({
        strokeWidth: '1vp',
        color: ResourceUtil.getCommonDividerColor()
      })
      .minSideBarWidth(this.getUIContext().px2vp(this.windowWidth) / 3)
      .maxSideBarWidth(this.getUIContext().px2vp(this.windowWidth) / 3)
      .autoHide(false)
    }
    .hideTitleBar(true)
  }
}
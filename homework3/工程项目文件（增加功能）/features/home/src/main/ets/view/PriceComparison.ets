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

import { BreakpointConstants, CommonConstants, ResourceUtil } from '@ohos/commons';
import { CompareProduct, PlatformPrice, PriceComparisonViewModel } from '../viewmodel/PriceComparisonViewModel';

@Component
export struct PriceComparison {
  @StorageLink('currentBreakpoint') currentBreakpoint: string = BreakpointConstants.BREAKPOINT_LG;
  @State compareList: CompareProduct[] = new PriceComparisonViewModel().getCompareList();
  @State selectedProduct: number = 0;
  private scroller: Scroller = new Scroller();

  build() {
    Column() {
      // Title bar.
      Row() {
        Text('价格对比')
          .fontSize(20)
          .fontWeight(CommonConstants.FONT_WEIGHT_500)
          .fontColor(Color.Black)

        Blank()

        Text('共' + this.compareList.length + '件商品')
          .fontSize(14)
          .fontColor($r('app.color.normal_font_color'))
      }
      .width(CommonConstants.FULL_PERCENT)
      .height(56)
      .padding({
        left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
        right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
      })

      // Product selector.
      Scroll() {
        Row({ space: 12 }) {
          ForEach(this.compareList, (item: CompareProduct, index: number) => {
            Column() {
              Image(item.getImage())
                .width(60)
                .height(60)
                .borderRadius(8)
                .objectFit(ImageFit.Contain)

              Text(item.getName())
                .fontSize(11)
                .maxLines(1)
                .textOverflow({ overflow: TextOverflow.Ellipsis })
                .width(70)
                .textAlign(TextAlign.Center)
                .margin({ top: 4 })
            }
            .padding({ top: 4, bottom: 4 })
            .borderRadius(8)
            .backgroundColor(index === this.selectedProduct ? '#FFE8E8E8' : Color.Transparent)
            .onClick(() => {
              this.selectedProduct = index;
            })
          }, (item: CompareProduct, index: number) => item.getName() + index)
        }
        .padding({ left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint) })
      }
      .scrollBar(BarState.Off)
      .height(100)
      .width(CommonConstants.FULL_PERCENT)

      // Price comparison details.
      Scroll(this.scroller) {
        Column() {
          if (this.compareList.length > 0 && this.selectedProduct < this.compareList.length) {
            this.PriceDetailView(this.compareList[this.selectedProduct])
          }
        }
        .width(CommonConstants.FULL_PERCENT)
      }
      .scrollBar(BarState.Off)
      .layoutWeight(1)
      .width(CommonConstants.FULL_PERCENT)
    }
    .width(CommonConstants.FULL_PERCENT)
    .height(CommonConstants.FULL_PERCENT)
    .backgroundColor(ResourceUtil.getCommonBackgroundColor()[0])
  }

  @Builder
  PriceDetailView(product: CompareProduct) {
    Column() {
      // Price summary card.
      Column() {
        Row() {
          Text('最低价')
            .fontSize(13)
            .fontColor($r('app.color.normal_font_color'))
          Text(product.getMinPrice().toString())
            .fontSize(24)
            .fontColor('#CF0A2C')
            .fontWeight(CommonConstants.FONT_WEIGHT_500)
            .margin({ left: 4 })
          Text('最高价')
            .fontSize(13)
            .fontColor($r('app.color.normal_font_color'))
            .margin({ left: 16 })
          Text(product.getMaxPrice().toString())
            .fontSize(16)
            .fontColor(Color.Black)
            .margin({ left: 4 })
          Blank()
          Text('价差 ¥' + product.getPriceDiff())
            .fontSize(12)
            .fontColor('#CF0A2C')
            .backgroundColor('#FFEEEE')
            .padding({ left: 8, right: 8, top: 2, bottom: 2 })
            .borderRadius(4)
        }
        .width(CommonConstants.FULL_PERCENT)
      }
      .width(CommonConstants.FULL_PERCENT)
      .backgroundColor(Color.White)
      .borderRadius(12)
      .padding(16)
      .margin({ top: 8, bottom: 12 })

      // Platform list.
      Column() {
        Text('各平台价格')
          .fontSize(16)
          .fontWeight(CommonConstants.FONT_WEIGHT_500)
          .fontColor(Color.Black)
          .width(CommonConstants.FULL_PERCENT)
          .margin({ bottom: 12 })

        ForEach(product.getPlatforms(), (platform: PlatformPrice, idx: number) => {
          this.PlatformItem(platform)
        }, (platform: PlatformPrice, idx: number) => platform.getPlatformName() + idx)
      }
      .width(CommonConstants.FULL_PERCENT)
      .backgroundColor(Color.White)
      .borderRadius(12)
      .padding(16)
      .margin({ bottom: 12 })

      // Trend card placeholder.
      Column() {
        Text('价格趋势')
          .fontSize(16)
          .fontWeight(CommonConstants.FONT_WEIGHT_500)
          .fontColor(Color.Black)
          .width(CommonConstants.FULL_PERCENT)

        Row() {
          Column() {
            Text('近期最低 ¥' + product.getMinPrice())
              .fontSize(14)
              .fontColor($r('app.color.normal_font_color'))
              .margin({ bottom: 4 })
            Text(product.getPriceDiff() > 0 ? '↓ 价格波动 ¥' + product.getPriceDiff() : '价格稳定')
              .fontSize(12)
              .fontColor('#00AA6C')
          }

          Blank()

          // Simple bar chart simulation.
          Row({ space: 4 }) {
            ForEach(product.getPlatforms(), (platform: PlatformPrice, idx: number) => {
              Column() {
                Column()
                  .width(12)
                  .height(platform.getPrice() / product.getMaxPrice() * 40)
                  .backgroundColor(idx === 0 ? '#CF0A2C' : '#999999')
                  .borderRadius({ topLeft: 2, topRight: 2 })
                Text(platform.getPlatformName().charAt(0))
                  .fontSize(8)
                  .fontColor($r('app.color.normal_font_color'))
                  .margin({ top: 2 })
              }
              .alignItems(HorizontalAlign.Center)
            }, (platform: PlatformPrice, idx: number) => 'bar' + idx)
          }
          .alignItems(VerticalAlign.Bottom)
        }
        .width(CommonConstants.FULL_PERCENT)
        .margin({ top: 12 })
      }
      .width(CommonConstants.FULL_PERCENT)
      .backgroundColor(Color.White)
      .borderRadius(12)
      .padding(16)
    }
    .width(CommonConstants.FULL_PERCENT)
    .padding({
      left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
      right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
    })
  }

  @Builder
  PlatformItem(platform: PlatformPrice) {
    Row() {
      Column() {
        Row() {
          Text(platform.getPlatformName())
            .fontSize(15)
            .fontWeight(CommonConstants.FONT_WEIGHT_500)
            .fontColor(Color.Black)
          if (platform.isOfficialStore()) {
            Text('官方')
              .fontSize(10)
              .fontColor('#CF0A2C')
              .backgroundColor('#FFEEEE')
              .padding({ left: 4, right: 4, top: 1, bottom: 1 })
              .borderRadius(2)
              .margin({ left: 6 })
          }
        }
        Text('点击前往购买')
          .fontSize(11)
          .fontColor($r('app.color.normal_font_color'))
          .margin({ top: 2 })
      }

      Blank()

      Text(platform.getPriceDisplay())
        .fontSize(18)
        .fontWeight(CommonConstants.FONT_WEIGHT_500)
        .fontColor('#CF0A2C')
    }
    .width(CommonConstants.FULL_PERCENT)
    .height(56)
    .border({
      width: { bottom: 1 },
      color: ResourceUtil.getCommonDividerColor()
    })
    .padding({ top: 8, bottom: 8 })
  }
}

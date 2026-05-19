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

@Component
export struct ProfileContent {
  @StorageLink('currentBreakpoint') currentBreakpoint: string = BreakpointConstants.BREAKPOINT_LG;
  @State orderCounts: number[] = [0, 0, 0, 0];

  build() {
    Column() {
      // User header section.
      Column() {
        // Avatar placeholder.
        Stack() {
          Image($r('app.media.tab_mine_selected'))
            .width(36)
            .height(36)
        }
        .width(72)
        .height(72)
        .borderRadius(36)
        .backgroundColor('#E5E5E5')
        .alignContent(Alignment.Center)

        Text('华为用户')
          .fontSize(18)
          .fontWeight(CommonConstants.FONT_WEIGHT_500)
          .fontColor(Color.Black)
          .margin({ top: 12 })

        Text('探索多平台最优价格')
          .fontSize(12)
          .fontColor($r('app.color.normal_font_color'))
          .margin({ top: 4 })
      }
      .width(CommonConstants.FULL_PERCENT)
      .height(200)
      .justifyContent(FlexAlign.Center)

      // Order stats row.
      Row() {
        ForEach(['待付款', '待发货', '待收货', '待评价'], (label: string, idx: number) => {
          Column() {
            Text(this.orderCounts[idx].toString())
              .fontSize(20)
              .fontWeight(CommonConstants.FONT_WEIGHT_500)
              .fontColor(Color.Black)
            Text(label)
              .fontSize(12)
              .fontColor($r('app.color.normal_font_color'))
              .margin({ top: 4 })
          }
          .layoutWeight(1)
          .alignItems(HorizontalAlign.Center)
        })
      }
      .width(CommonConstants.FULL_PERCENT)
      .backgroundColor(Color.White)
      .borderRadius(12)
      .padding({ top: 16, bottom: 16 })
      .margin({ top: 12 })

      // Menu section 1: orders.
      Column() {
        this.MenuItem('我的订单', ResourceUtil.getArrowRight())
        this.MenuItem('收货地址', ResourceUtil.getArrowRight())
        this.MenuItem('我的收藏', ResourceUtil.getArrowRight())
      }
      .width(CommonConstants.FULL_PERCENT)
      .backgroundColor(Color.White)
      .borderRadius(12)
      .margin({ top: 12 })

      // Menu section 2: tools.
      Column() {
        this.MenuItem('浏览记录', ResourceUtil.getArrowRight())
        this.MenuItem('比价历史', ResourceUtil.getArrowRight())
      }
      .width(CommonConstants.FULL_PERCENT)
      .backgroundColor(Color.White)
      .borderRadius(12)
      .margin({ top: 12 })

      // Menu section 3: settings.
      Column() {
        this.MenuItem('设置', ResourceUtil.getArrowRight())
      }
      .width(CommonConstants.FULL_PERCENT)
      .backgroundColor(Color.White)
      .borderRadius(12)
      .margin({ top: 12 })
    }
    .width(CommonConstants.FULL_PERCENT)
    .height(CommonConstants.FULL_PERCENT)
    .backgroundColor(ResourceUtil.getCommonBackgroundColor()[0])
    .padding({
      left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
      right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
    })
  }

  @Builder
  MenuItem(title: string, arrowIcon: Resource) {
    Row() {
      Text(title)
        .fontSize(15)
        .fontColor(Color.Black)
      Blank()
      Image(arrowIcon)
        .width(16)
        .height(16)
    }
    .width(CommonConstants.FULL_PERCENT)
    .height(52)
    .padding({ left: 16, right: 16 })
    .border({
      width: { bottom: 0.5 },
      color: ResourceUtil.getCommonDividerColor()
    })
  }
}

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
import { Categories } from './Categories';
import { FlashSale } from './FlashSale';
import { HomeHeader } from './HomeHeader';
import { RecommendedProductView } from './RecommendedProductView';
import { Selection } from './Selection';
import { WelfareView } from './WelfareView';

@Component
export struct HomeContent {
  @StorageLink('currentBreakpoint') currentBreakpoint: string = BreakpointConstants.BREAKPOINT_LG;
  private scroller: Scroller = new Scroller();

  build() {
    Column() {
      HomeHeader()

      Scroll(this.scroller) {
        Column() {
          Categories()

          // Quick entry card for price comparison.
          this.PriceComparisonEntry()

          Column() {
            RecommendedProductView()
            WelfareView()
            Selection()
            FlashSale()
          }
          .width(CommonConstants.FULL_PERCENT)
          .justifyContent(FlexAlign.Start)
          .padding({ right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint) })
        }
        .width(CommonConstants.FULL_PERCENT)
        .justifyContent(FlexAlign.Start)
      }
      .width(CommonConstants.FULL_PERCENT)
      .layoutWeight(1)
      .scrollBar(BarState.Off)
    }
    .backgroundColor(ResourceUtil.getCommonBackgroundColor()[0])
    .padding({
      left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
    })
    .height(CommonConstants.FULL_PERCENT)
    .width(CommonConstants.FULL_PERCENT)
  }

  @Builder
  PriceComparisonEntry() {
    Column() {
      Row() {
        Image($r('app.media.tab_discovery'))
          .width(32)
          .height(32)

        Column() {
          Text('多平台价格对比')
            .fontSize(16)
            .fontWeight(CommonConstants.FONT_WEIGHT_500)
            .fontColor(Color.Black)
          Text('实时查看各电商平台价格 · 帮你找到最优惠')
            .fontSize(12)
            .fontColor($r('app.color.normal_font_color'))
            .margin({ top: 4 })
        }
        .margin({ left: 12 })
        .layoutWeight(1)
        .alignItems(HorizontalAlign.Start)

        Text('立即查看')
          .fontSize(12)
          .fontColor(Color.White)
          .fontWeight(CommonConstants.FONT_WEIGHT_500)
          .backgroundColor('#CF0A2C')
          .borderRadius(14)
          .padding({ left: 12, right: 12, top: 6, bottom: 6 })
      }
      .width(CommonConstants.FULL_PERCENT)
      .padding(16)
    }
    .width(CommonConstants.FULL_PERCENT)
    .backgroundColor(Color.White)
    .borderRadius(12)
    .margin({ top: 12, right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint) })
    .onClick(() => {
      AppStorage.set('switchToTab', 2);
    })
  }
}
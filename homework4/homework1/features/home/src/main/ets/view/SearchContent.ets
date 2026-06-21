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
export struct SearchContent {
  @StorageLink('currentBreakpoint') currentBreakpoint: string = BreakpointConstants.BREAKPOINT_LG;
  @Consume('pageInfos') pageInfos: NavPathStack;
  @State searchText: string = '';
  @State showResults: boolean = false;

  // Hot search keywords.
  private hotKeywords: string[] = [
    'HUAWEI Mate 60 Pro', 'Mate X5', 'P60 Pro', 'MateBook 14s',
    'MatePad Air', 'FreeBuds Pro', 'Watch GT 4', 'Sound X'
  ];

  // Search history.
  @State searchHistory: string[] = ['Mate 60 Pro', 'Mate X5 价格对比', 'HUAWEI P60'];

  build() {
    Column() {
      // Search bar at top.
      Row() {
        // Back button.
        Image($r('app.media.ic_public_back'))
          .width(ResourceUtil.getCommonImgSize()[0])
          .height(ResourceUtil.getCommonImgSize()[0])
          .margin({ right: 8 })
          .onClick(() => {
            this.pageInfos.pop();
          })

        // Search input.
        TextInput({ text: this.searchText, placeholder: '搜索商品或平台...' })
          .placeholderFont({ size: 14, weight: FontWeight.Normal })
          .placeholderColor($r('app.color.normal_font_color'))
          .height(36)
          .fontSize(14)
          .backgroundColor($r('app.color.common_background_1'))
          .borderRadius(18)
          .padding({ left: 16, right: 16 })
          .layoutWeight(1)
          .onChange((value: string) => {
            this.searchText = value;
            this.showResults = value.length > 0;
          })
          .onSubmit(() => {
            this.doSearch();
          })

        // Search button.
        Text('搜索')
          .fontSize(15)
          .fontColor('#CF0A2C')
          .fontWeight(CommonConstants.FONT_WEIGHT_500)
          .margin({ left: 12 })
          .onClick(() => {
            this.doSearch();
          })
      }
      .width(CommonConstants.FULL_PERCENT)
      .height(56)
      .padding({
        left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
        right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
      })

      // Content area.
      if (this.showResults) {
        // Search results.
        this.SearchResults()
      } else {
        // Default view: hot searches and history.
        Scroll() {
          Column() {
            // Search history.
            if (this.searchHistory.length > 0) {
              Column() {
                Row() {
                  Text('搜索历史')
                    .fontSize(15)
                    .fontWeight(CommonConstants.FONT_WEIGHT_500)
                    .fontColor(Color.Black)
                  Blank()
                  Image($r('app.media.icon_close'))
                    .width(16)
                    .height(16)
                    .onClick(() => {
                      this.searchHistory = [];
                    })
                }
                .width(CommonConstants.FULL_PERCENT)
                .margin({ bottom: 12 })

                // History tags.
                Flex({ wrap: FlexWrap.Wrap }) {
                  ForEach(this.searchHistory, (keyword: string) => {
                    Text(keyword)
                      .fontSize(12)
                      .fontColor($r('app.color.normal_font_color'))
                      .backgroundColor($r('app.color.common_background_1'))
                      .borderRadius(14)
                      .padding({ left: 12, right: 12, top: 6, bottom: 6 })
                      .margin({ right: 8, bottom: 8 })
                      .onClick(() => {
                        this.searchText = keyword;
                        this.showResults = true;
                      })
                  })
                }
                .width(CommonConstants.FULL_PERCENT)
              }
              .width(CommonConstants.FULL_PERCENT)
              .padding(16)
              .backgroundColor(Color.White)
              .borderRadius(12)
              .margin({ top: 12 })
            }

            // Hot searches.
            Column() {
              Text('热门搜索')
                .fontSize(15)
                .fontWeight(CommonConstants.FONT_WEIGHT_500)
                .fontColor(Color.Black)
                .width(CommonConstants.FULL_PERCENT)
                .margin({ bottom: 12 })

              Flex({ wrap: FlexWrap.Wrap }) {
                ForEach(this.hotKeywords, (keyword: string, idx: number) => {
                  Text(keyword)
                    .fontSize(12)
                    .fontColor(idx < 3 ? '#CF0A2C' : $r('app.color.normal_font_color'))
                    .backgroundColor($r('app.color.common_background_1'))
                    .borderRadius(14)
                    .padding({ left: 12, right: 12, top: 6, bottom: 6 })
                    .margin({ right: 8, bottom: 8 })
                    .onClick(() => {
                      this.searchText = keyword;
                      this.showResults = true;
                    })
                })
              }
              .width(CommonConstants.FULL_PERCENT)
            }
            .width(CommonConstants.FULL_PERCENT)
            .padding(16)
            .backgroundColor(Color.White)
            .borderRadius(12)
            .margin({ top: 12 })
          }
          .width(CommonConstants.FULL_PERCENT)
          .padding({
            left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
            right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
          })
        }
        .scrollBar(BarState.Off)
        .layoutWeight(1)
        .width(CommonConstants.FULL_PERCENT)
      }
    }
    .width(CommonConstants.FULL_PERCENT)
    .height(CommonConstants.FULL_PERCENT)
    .backgroundColor(ResourceUtil.getCommonBackgroundColor()[0])
  }

  @Builder
  SearchResults() {
    Scroll() {
      Column() {
        Text('搜索结果')
          .fontSize(14)
          .fontColor($r('app.color.normal_font_color'))
          .width(CommonConstants.FULL_PERCENT)
          .margin({ bottom: 12 })

        ForEach(this.getMockResults(), (item: SearchResultItem) => {
          this.ResultItem(item)
        })
      }
      .width(CommonConstants.FULL_PERCENT)
      .padding({
        left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
        right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
      })
    }
    .scrollBar(BarState.Off)
    .layoutWeight(1)
    .width(CommonConstants.FULL_PERCENT)
  }

  @Builder
  ResultItem(item: SearchResultItem) {
    Row() {
      Image(item.image)
        .width(80)
        .height(80)
        .borderRadius(8)
        .objectFit(ImageFit.Contain)

      Column() {
        Text(item.name)
          .fontSize(14)
          .fontWeight(CommonConstants.FONT_WEIGHT_500)
          .fontColor(Color.Black)
          .maxLines(2)
          .textOverflow({ overflow: TextOverflow.Ellipsis })
          .width(CommonConstants.FULL_PERCENT)

        Row() {
          Text('¥' + item.minPrice)
            .fontSize(18)
            .fontColor('#CF0A2C')
            .fontWeight(CommonConstants.FONT_WEIGHT_500)

          Text('起')
            .fontSize(11)
            .fontColor($r('app.color.normal_font_color'))
            .margin({ left: 4 })
        }
        .margin({ top: 4 })

        Text(item.platformCount + '个平台在售')
          .fontSize(11)
          .fontColor($r('app.color.normal_font_color'))
          .margin({ top: 2 })
      }
      .layoutWeight(1)
      .margin({ left: 12 })
      .alignItems(HorizontalAlign.Start)
    }
    .width(CommonConstants.FULL_PERCENT)
    .padding(12)
    .backgroundColor(Color.White)
    .borderRadius(12)
    .margin({ bottom: 8 })
  }

  doSearch(): void {
    if (this.searchText.trim().length > 0) {
      // Add to history, avoid duplicates.
      if (!this.searchHistory.includes(this.searchText.trim())) {
        this.searchHistory.unshift(this.searchText.trim());
        if (this.searchHistory.length > 10) {
          this.searchHistory.pop();
        }
      }
      this.showResults = true;
    }
  }

  getMockResults(): SearchResultItem[] {
    return [
      new SearchResultItem('HUAWEI Mate 60 Pro', $r('app.media.classify_product_1'), 6799, 5),
      new SearchResultItem('HUAWEI Mate X5', $r('app.media.classify_product_4'), 12899, 4),
      new SearchResultItem('HUAWEI P60 Pro', $r('app.media.classify_product_11'), 5899, 4),
    ];
  }
}

class SearchResultItem {
  name: string;
  image: Resource;
  minPrice: number;
  platformCount: number;

  constructor(name: string, image: Resource, minPrice: number, platformCount: number) {
    this.name = name;
    this.image = image;
    this.minPrice = minPrice;
    this.platformCount = platformCount;
  }
}

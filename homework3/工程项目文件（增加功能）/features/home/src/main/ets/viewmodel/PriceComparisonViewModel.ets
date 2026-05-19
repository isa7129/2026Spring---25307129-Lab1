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

export class PriceComparisonViewModel {
  private compareList: CompareProduct[] = [];

  constructor() {
    // Mock data for multi-platform price comparison.
    this.compareList.push(new CompareProduct(
      'HUAWEI Mate 60 Pro',
      $r('app.media.classify_product_1'),
      [
        new PlatformPrice('华为商城', 'https://www.vmall.com', 6999, true),
        new PlatformPrice('京东', 'https://www.jd.com', 6899, false),
        new PlatformPrice('天猫', 'https://www.tmall.com', 7099, false),
        new PlatformPrice('苏宁易购', 'https://www.suning.com', 6959, false),
        new PlatformPrice('拼多多', 'https://www.pinduoduo.com', 6799, false),
      ]
    ));
    this.compareList.push(new CompareProduct(
      'HUAWEI Mate X5',
      $r('app.media.classify_product_4'),
      [
        new PlatformPrice('华为商城', 'https://www.vmall.com', 12999, true),
        new PlatformPrice('京东', 'https://www.jd.com', 12899, false),
        new PlatformPrice('天猫', 'https://www.tmall.com', 13199, false),
        new PlatformPrice('苏宁易购', 'https://www.suning.com', 12999, false),
      ]
    ));
    this.compareList.push(new CompareProduct(
      'HUAWEI P60 Pro',
      $r('app.media.classify_product_11'),
      [
        new PlatformPrice('华为商城', 'https://www.vmall.com', 5988, true),
        new PlatformPrice('京东', 'https://www.jd.com', 5899, false),
        new PlatformPrice('天猫', 'https://www.tmall.com', 6099, false),
        new PlatformPrice('苏宁易购', 'https://www.suning.com', 5969, false),
      ]
    ));
    this.compareList.push(new CompareProduct(
      'HUAWEI MateBook 14s',
      $r('app.media.section_product_5'),
      [
        new PlatformPrice('华为商城', 'https://www.vmall.com', 8399, true),
        new PlatformPrice('京东', 'https://www.jd.com', 8199, false),
        new PlatformPrice('天猫', 'https://www.tmall.com', 8499, false),
      ]
    ));
    this.compareList.push(new CompareProduct(
      'HUAWEI MatePad Air',
      $r('app.media.section_product_4'),
      [
        new PlatformPrice('华为商城', 'https://www.vmall.com', 2599, true),
        new PlatformPrice('京东', 'https://www.jd.com', 2499, false),
        new PlatformPrice('天猫', 'https://www.tmall.com', 2659, false),
        new PlatformPrice('苏宁易购', 'https://www.suning.com', 2599, false),
      ]
    ));
  }

  getCompareList(): CompareProduct[] {
    return this.compareList;
  }
}

export class CompareProduct {
  private name: string;
  private image: Resource;
  private platforms: PlatformPrice[];

  constructor(name: string, image: Resource, platforms: PlatformPrice[]) {
    this.name = name;
    this.image = image;
    this.platforms = platforms;
  }

  getName(): string {
    return this.name;
  }

  getImage(): Resource {
    return this.image;
  }

  getPlatforms(): PlatformPrice[] {
    return this.platforms;
  }

  getMinPrice(): number {
    return Math.min(...this.platforms.map(p => p.getPrice()));
  }

  getMaxPrice(): number {
    return Math.max(...this.platforms.map(p => p.getPrice()));
  }

  getPriceDiff(): number {
    return this.getMaxPrice() - this.getMinPrice();
  }
}

export class PlatformPrice {
  private platformName: string;
  private url: string;
  private price: number;
  private isOfficial: boolean;

  constructor(platformName: string, url: string, price: number, isOfficial: boolean) {
    this.platformName = platformName;
    this.url = url;
    this.price = price;
    this.isOfficial = isOfficial;
  }

  getPlatformName(): string {
    return this.platformName;
  }

  getUrl(): string {
    return this.url;
  }

  getPrice(): number {
    return this.price;
  }

  isOfficialStore(): boolean {
    return this.isOfficial;
  }

  getPriceDisplay(): string {
    return '¥' + this.price.toString();
  }
}

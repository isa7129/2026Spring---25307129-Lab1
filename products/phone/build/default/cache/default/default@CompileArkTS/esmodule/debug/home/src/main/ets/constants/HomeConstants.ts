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
export class HomeConstants {
    /**
     * Footer tab topics.
     */
    static readonly FOOTER_TOPIC_LIST = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108916, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108917, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108918, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108919, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108920, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Footer topic icons.
     */
    static readonly FOOTER_TOPIC_ICONS: Resource[] = [{ "id": 67109329, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109325, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109327, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109333, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109331, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Footer topic icons.
     */
    static readonly FOOTER_TOPIC_ICONS_SELECTED: Resource[] = [{ "id": 67109330, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109326, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109328, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109334, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109332, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Top bar text list.
     */
    static readonly TOP_BAR_TEXTS = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109005, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109006, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109007, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109008, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Search placeholder.
     */
    static readonly SEARCH_PLACEHOLDER = (context: Context): string => context.resourceManager.getStringSync({ "id": 67109010, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id);
    /**
     * Recommended product list.
     */
    static readonly RECOMMENDED_PRODUCTS: Resource[] = [{ "id": 67109312, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109313, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109314, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109315, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Recommended product is living list.
     */
    static readonly RECOMMENDED_PRODUCT_LIVING: boolean[] = [true, false, true, false];
    /**
     * Good categories.
     */
    static readonly GOOD_CATEGORIES = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108921, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108923, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108924, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108925, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108926, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108927, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108928, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108929, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108930, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108922, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Good category images.
     */
    static readonly GOOD_CATEGORY_IMG: Resource[] = [{ "id": 67109270, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109272, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109273, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109274, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109275, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109276, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109277, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109278, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109279, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109271, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Category list space list.
     */
    static readonly CATEGORY_LIST_SPACES: string[] = ['0', '36vp', '72vp'];
    /**
     * Category divider stroke width.
     */
    static readonly CATEGORY_DIVIDER_STROKE_WIDTH: string = '4vp';
    /**
     * Category list item width list.
     */
    static readonly CATEGORY_LIST_ITEM_WIDTHS: string[] = ['20%', '64vp', '68vp'];
    /**
     * Recommended product item space list.
     */
    static readonly RECOMMENDED_PRODUCT_ITEM_SPACES: string[] = ['16vp', '12vp'];
    /**
     * Recommended product view margin list.
     */
    static readonly RECOMMENDED_PRODUCT_VIEW_SPACES: number[] = [12, 16, 24, 32];
    /**
     * Welfare products.
     */
    static readonly WELFARE_PRODUCTS: string[] = ['1299', '899', '599', '2499', '6988', '1799', '988', '6999'];
    /**
     * Welfare product images.
     */
    static readonly WELFARE_PRODUCT_IMG: Resource[] = [{ "id": 67109335, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109336, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109337, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109338, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109339, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109340, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109341, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109342, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Price unit.
     */
    static readonly PRICE_UNIT = (context: Context): string[] => ['￥',
        context.resourceManager.getStringSync({ "id": 67108964, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)];
    /**
     * Home title list.
     */
    static readonly HOME_TITLES = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108932, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108933, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108934, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Home button text list.
     */
    static readonly BUTTON_TEXTS = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108909, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108910, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Welfare tip text.
     */
    static readonly TIP_TEXTS = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109002, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109003, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109004, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Gradient color list.
     */
    static readonly GRADIENT_COLORS: string[] = ['#4DEDAA68', '#33FFE9C1', '#FF6354', '#EA1559'];
    /**
     * Section product image list.
     */
    static readonly SECTION_PRODUCT_IMAGES: Resource[] = [{ "id": 67109316, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109317, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109318, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109319, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109320, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Section products title list.
     */
    static readonly SECTION_PRODUCTS_TITLES = (context: Context): string[][] => [
        [context.resourceManager.getStringSync({ "id": 67108990, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        ['HUAWEI Mate 50',
            context.resourceManager.getStringSync({ "id": 67108991, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        ['Sound X NEW'], ['HUAWEI MatePad Air'], ['HUAWEI MateBook 14s']
    ];
    /**
     * Section products info list.
     */
    static readonly SECTION_PRODUCTS_INFO = (context: Context): string[] => ['',
        context.resourceManager.getStringSync({ "id": 67108984, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id), '',
        context.resourceManager.getStringSync({ "id": 67108985, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108986, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)];
    /**
     * Section products price list.
     */
    static readonly SECTION_PRODUCTS_PRICES: string[] = ['￥10999', '￥4999', '￥2499', '￥2599', '￥8399'];
    /**
     * Section products feature list.
     */
    static readonly SECTION_PRODUCTS_FEATURES = (context: Context): string[][] => [
        [context.resourceManager.getStringSync({ "id": 67108979, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67108980, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67108981, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67108982, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67108983, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)]
    ];
    /**
     * Section products comment list.
     */
    static readonly SECTION_PRODUCTS_COMMENTS = (context: Context): string => context.resourceManager.getStringSync({ "id": 67108931, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id);
    /**
     * Welfare grid column gutter list.
     */
    static readonly WELFARE_GRID_COL_GUTTERS: number[] = [10, 12, 8, 4];
    /**
     * Selection image aspect ratio.
     */
    static readonly SELECTION_IMG_ASPECT_RATIO: number = 1.29;
    /**
     * Flash sale product image list.
     */
    static readonly FLASH_SALE_PRODUCT_IMAGES: Resource[] = [{ "id": 67109299, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109300, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109301, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109302, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109302, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109302, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Flash sale product title list.
     */
    static readonly FLASH_SALE_PRODUCT_TITLES = (context: Context): string[][] => [['HUAWEI Mate 50'], ['Mate Xs 2'],
        ['HUAWEI nova \u200B1\u200B0',
            context.resourceManager.getStringSync({ "id": 67108935, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        ['MateBook E Go', context.resourceManager.getStringSync({ "id": 67108951, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        ['MateBook E Go', context.resourceManager.getStringSync({ "id": 67108951, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        ['MateBook E Go', context.resourceManager.getStringSync({ "id": 67108951, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)]];
    /**
     * Flash sale product info list.
     */
    static readonly FLASH_SALE_PRODUCT_INFO = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108984, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108989, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108987, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108988, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108988, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108988, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
    ];
    /**
     * Flash sale product feature list.
     */
    static readonly FLASH_SALE_PRODUCT_FEATURES = (context: Context): string[][] => [
        [context.resourceManager.getStringSync({ "id": 67108911, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
            context.resourceManager.getStringSync({ "id": 67108912, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67108913, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67108914, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67108915, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67108915, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67108915, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)]
    ];
    /**
     * Flash sale product price list.
     */
    static readonly FLASH_SALE_PRODUCT_PRICES: string[] = ['￥4999', '￥9999', '￥2949', '￥4899', '￥4899', '￥4899'];
    /**
     * Flash sale original price list.
     */
    static readonly FLASH_SALE_PRODUCT_ORIGINAL_PRICES: string[] = ['￥5488', '', '￥2999', '￥4999', '￥4999', '￥4999'];
    /**
     * Flash sale image percent.
     */
    static readonly FLASH_SALE_IMAGE_PERCENT: number[] = [0.41, 0.44];
    /**
     * Flash sale introduction column height.
     */
    static readonly FLASH_SALE_INTRO_COL_HEIGHT: number = 134;
    /**
     * Home header list spaces.
     */
    static readonly HOME_HEADER_LIST_SPACES: number[] = [14, 16, 32];
    /**
     * Nine.
     */
    static readonly NINE: number = 9;
}

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
export class ClassifyConstants {
    /**
     * Navigation list.
     */
    static readonly NAV_ROUTER_LIST = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108936, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108943, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108944, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108945, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108946, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108947, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108948, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108949, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108950, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108937, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108938, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108939, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108940, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108941, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108942, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Shop Matrix.
     */
    static readonly SHOP_MATRIX: Array<Array<string>> = [
        ['Mate 60 Pro+', 'Mate 60', 'Mate 60 Pro', 'Mate X5'],
        ['Mate 60 Pro+', 'Mate 60', 'Mate 60 Pro', 'Mate X5', 'Mate X3', 'Mate 50', 'Mate 50 Pro', 'Mate Xs 2', 'Mate 50E',
            'Mate 50 RS'],
        ['P60 ', 'P60 Pro', 'P60 Art ', 'P50 Pro', 'P50E', 'P50 Pocket']
    ];
    /**
     * Shop title list.
     */
    static readonly SHOP_TITLE_LIST = (context: Context): Array<string> => [
        context.resourceManager.getStringSync({ "id": 67108999, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109000, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109001, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Shop matrix image.
     */
    static readonly SHOP_MATRIX_IMAGE: Array<Array<Resource>> = [
        [{ "id": 67109283, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109291, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109292, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109293, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }],
        [{ "id": 67109283, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109291, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109292, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109293, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109294, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109295, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109296, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109297, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109298, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109284, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }],
        [{ "id": 67109285, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109286, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109287, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109288, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109289, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109290, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }]
    ];
    /**
     * Banner images.
     */
    static readonly BANNER_IMAGE: Array<Resource> = [{ "id": 67109280, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109281, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109282, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Banner image scale.
     */
    static readonly BANNER_IMAGE_RATIO: number = 2.32;
    /**
     * Number of pictures displayed in the banner.
     */
    static readonly SWIPER_DISPLAY_COUNT: number[] = [1, 2, 3];
    /**
     * Interval of swiper.
     */
    static readonly SWIPER_ITEM_SPACE: number[] = [0, 12, 16];
    /**
     * Interval of swiper.
     */
    static readonly SWIPER_DIVIDER_WIDTH: string = '2vp';
    /**
     * Input prompt.
     */
    static readonly INPUT_PROMPT_STRING = (context: Context): string => context.resourceManager.getStringSync({ "id": 67109009, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id);
    /**
     * Grid row gutters.
     */
    static readonly GRID_ROW_GUTTERS: number[] = [24, 8, 16, 12];
    /**
     * Page info list.
     */
    static readonly PAGE_INFO_LIST: string[] = ['liveHome', 'moreDetail', 'productHome'];
}

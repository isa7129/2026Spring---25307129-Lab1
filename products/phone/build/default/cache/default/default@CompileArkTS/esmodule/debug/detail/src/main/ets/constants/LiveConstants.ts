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
export class LiveConstants {
    /**
     * Live product image list.
     */
    static readonly LIVE_PRODUCT_IMAGE_LIST: Resource[] = [{ "id": 67109766, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109767, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109768, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109769, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109770, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109771, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109772, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109773, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Live product name list.
     */
    static readonly LIVE_PRODUCT_NAME_LIST: string[] = ['HUAWEI Mate 60 Pro', 'XXXXXXXXXXX', 'XXXXXXXXXXX', 'XXXXXXXXXXX',
        'XXXXXXXXXXX', 'XXXXXXXXXXX', 'XXXXXXXXXXX', 'XXXXXXXXXXX'];
    /**
     * Live product price list.
     */
    static readonly LIVE_PRODUCT_PRICE_LIST: string[] = ['￥ 6999', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX'];
    /**
     * Shop car product image list.
     */
    static readonly SHOP_CAR_PRODUCT_IMAGE_LIST: Resource[] = [{ "id": 67109762, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109763, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109764, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109765, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Shop car product name list.
     */
    static readonly SHOP_CAR_PRODUCT_NAME_LIST: string[] = ['HUAWEI Mate 60 Pro', 'Mate Xs 2', 'MateBook E Go',
        'HUAWEI Mate 50'];
    /**
     * Shop car product remark list.
     */
    static readonly SHOP_CAR_PRODUCT_REMARK_LIST = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109355, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109356, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109357, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109355, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Shop car product discounts list.
     */
    static readonly SHOP_CAR_PRODUCT_DISCOUNTS_LIST = (context: Context): string[][] => [
        [context.resourceManager.getStringSync({ "id": 67109351, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
            context.resourceManager.getStringSync({ "id": 67109401, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67109401, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67109396, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67109351, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
            context.resourceManager.getStringSync({ "id": 67109401, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)]
    ];
    /**
     * Shop car product price list.
     */
    static readonly SHOP_CAR_PRODUCT_PRICE_LIST: number[] = [6999, 9999, 4899, 4999];
    /**
     * Shop car icon resources.
     */
    static readonly SHOP_CAR_ICON_RESOURCES: Resource[] = [{ "id": 67109749, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109759, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109756, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Shop car icon names.
     */
    static readonly SHOP_CAR_ICON_NAMES = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109383, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109009, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109359, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Shop car tab list.
     */
    static readonly SHOP_CAR_TABS = (context: Context): string[] => {
        return [
            context.resourceManager.getStringSync({ "id": 67109393, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
            context.resourceManager.getStringSync({ "id": 67109410, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
            context.resourceManager.getStringSync({ "id": 67109403, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
            context.resourceManager.getStringSync({ "id": 67109360, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
            context.resourceManager.getStringSync({ "id": 67109415, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
            context.resourceManager.getStringSync({ "id": 67109400, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
        ];
    };
    /**
     * Live Comments.
     */
    static readonly LIVE_COMMENTS_LIST = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109352, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109353, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109354, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Comments layout weight.
     */
    static readonly COMMENTS_WIDTH: string[] = ['228vp', '400vp', '290vp'];
    /**
     * Shopping list interval.
     */
    static readonly SHOPPING_LIST_SPACE: string[] = ['12vp', '10vp'];
    /**
     * Currency symbol.
     */
    static readonly CURRENCY_SYMBOL: string = "￥ ";
    /**
     * Eight.
     */
    static readonly EIGHT: number = 8;
    /**
     * Ninety percent.
     */
    static readonly NINETY_PERCENT: string = '90%';
    /**
     * Pay button text.
     */
    static readonly PAY_BUTTON_TEXT = (context: Context): string => context.resourceManager.getStringSync({ "id": 67109395, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id);
    /**
     * X component params.
     */
    static readonly X_COMPONENT_PARAMS: string[] = ['live', 'surface'];
    /**
     * X component aspect ratio.
     */
    static readonly X_COMPONENT_ASPECT_RATIO: number = 0.56;
}

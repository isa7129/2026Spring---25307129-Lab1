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
export class DetailConstants {
    /**
     * Living.
     */
    static readonly LIVING = (context: Context): string => context.resourceManager.getStringSync({ "id": 67109402, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id);
    /**
     * Product detail resources.
     */
    static readonly PRODUCT_DETAIL_RESOURCES: Resource[] = [{ "id": 67109780, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109781, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109781, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109781, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109782, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Product small resources.
     */
    static readonly PRODUCT_SMALL_RESOURCES: Resource[] = [{ "id": 67109783, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109784, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109784, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109784, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109785, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Gradient color list.
     */
    static readonly GRADIENT_COLORS: string[] = ['#FF6354', '#CF0A2C', '#FAE8E0', '#FFC9C9'];
    /**
     * Product color selection.
     */
    static readonly PRODUCT_COLOR_SELECTION: Resource[] = [{ "id": 67109783, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109784, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109785, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Recommended config products.
     */
    static readonly RECOMMENDED_CONFIG_PRODUCTS: Resource[] = [{ "id": 67109786, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109787, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109788, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109789, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Param string list.
     */
    static readonly PARAM_STRING_LIST: string[] = ['shoppingBag', 'customerService'];
    /**
     * Customer service contents.
     */
    static readonly CUSTOMER_SERVICE_CONTENTS = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109413, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        '￥12999', '￥13999',
        context.resourceManager.getStringSync({ "id": 67109394, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109347, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109348, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109349, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109350, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Product color list.
     */
    static readonly COLOR_SELECT_NAME_LIST = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109343, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109344, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109345, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109346, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Product name list.
     */
    static readonly CAPACITY_SELECT_NAME_LIST: string[] = ['12GB+512GB', '12GB+1T'];
    /**
     * Product type list.
     */
    static readonly TYPE_SELECT_NAME_LIST = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109358, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Product select type list.
     */
    static readonly SELECT_NAME_LIST = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109380, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109381, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109382, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Product image list.
     */
    static readonly COLOR_SELECT_IMAGE_LIST: Resource[] = [{ "id": 67109776, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109777, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109778, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109779, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Button names.
     */
    static readonly BUTTON_NAMES = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109392, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109394, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Pay address and contact.
     */
    static readonly PAY_INFO = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109406, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109407, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109408, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109409, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Product config list.
     */
    static readonly PRODUCT_CONFIG_NAMES = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109361, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109362, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109363, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109364, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109365, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109366, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109367, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109368, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * User comment list.
     */
    static readonly USER_COMMENT_NAMES = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109384, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109385, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109386, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109387, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109388, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109389, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109390, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109391, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * List space.
     */
    static readonly PRODUCT_CONFIG_LIST_SPACE: number = 12;
    /**
     * Y position of live row.
     */
    static readonly LIVE_ROW_Y_POSITION: number = 12;
    /**
     * Live stack aspect ratio.
     */
    static readonly LIVE_STACK_ASPECT_RATIO: number[] = [1.2, 2.2];
    /**
     * Picture number.
     */
    static readonly PICTURE_INDICATOR = (context: Context): string[] => ['/5', '3D',
        context.resourceManager.getStringSync({ "id": 67109398, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)];
    /**
     * Picture list space list.
     */
    static readonly PICTURE_LIST_SPACES: string[] = ['8vp', '12vp', '16vp'];
    /**
     * Product discount name list.
     */
    static readonly PRODUCT_DISCOUNT_NAMES = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67109369, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109370, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        'Mate X5:',
        context.resourceManager.getStringSync({ "id": 67109371, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Product price name list.
     */
    static readonly PRODUCT_PRICE_NAMES = (context: Context): string[] => ['￥', '12999', '￥13999',
        context.resourceManager.getStringSync({ "id": 67109372, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        '07', ':', '14', ':', '50',
        context.resourceManager.getStringSync({ "id": 67109373, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109374, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109375, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109376, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109377, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109378, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67109379, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)];
    /**
     * 80 percent.
     */
    static readonly EIGHTY_PERCENT: string = '80%';
    /**
     * Comments list.
     */
    static readonly COMMENTS_LIST: number[] = [1, 2];
    /**
     * Navigation id.
     */
    static readonly NAVIGATION_ID: string = 'navId';
}

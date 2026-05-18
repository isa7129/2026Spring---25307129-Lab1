import type { Context } from "@ohos:abilityAccessCtrl";
export class ShoppingBagConstants {
    /**
     * Product names.
     */
    static readonly PRODUCT_NAME_LIST = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108965, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108966, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108967, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108965, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Product types.
     */
    static readonly PRODUCT_TYPE_LIST = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108977, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108976, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108978, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108977, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Product images.
     */
    static readonly PRODUCT_IMAGE_LIST: Resource[] = [{ "id": 67109321, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109322, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109323, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109321, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }];
    /**
     * Product preferential list.
     */
    static readonly PRODUCT_PREFERENTIALList_LIST = (context: Context): Array<Array<string>> => [
        [context.resourceManager.getStringSync({ "id": 67108968, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
            context.resourceManager.getStringSync({ "id": 67108969, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67108970, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
            context.resourceManager.getStringSync({ "id": 67108971, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67108968, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
            context.resourceManager.getStringSync({ "id": 67108971, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)],
        [context.resourceManager.getStringSync({ "id": 67108968, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
            context.resourceManager.getStringSync({ "id": 67108969, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)]
    ];
    /**
     * Product price list.
     */
    static readonly PRODUCT_PRICE_LIST: number[] = [6199, 6999, 6099, 6199];
    /**
     * Product original price list.
     */
    static readonly PRODUCT_ORIGINAL_PRICE_LIST: number[] = [6999, -1, 6999, 6999];
    /**
     * Product present list.
     */
    static readonly PRODUCT_PRESENT_LIST = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108972, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108973, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108974, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108972, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Product service list.
     */
    static readonly PRODUCT_SERVICE_LIST = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108975, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108975, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108975, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108975, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Preference details title.
     */
    static readonly PREFERENCE_DETAILS_TITLE = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108952, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108955, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108956, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108957, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108958, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Preference details price.
     */
    static readonly PREFERENCE_DETAILS_PRICE: string[] = ['13999', '-800', '-200', '-1000', '12999'];
    /**
     * Shopping bag layout weight list.
     */
    static readonly SHOPPING_BAG_LAYOUT_WEIGHTS: number[] = [35, 24];
    /**
     * Shopping bag titles.
     */
    static readonly SHOPPING_BAG_TITLES = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108992, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108993, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108994, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Shopping discount title list.
     */
    static readonly SHOPPING_DISCOUNT_TITLES = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108959, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108960, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108961, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108962, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108952, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108963, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Shopping card foot title list.
     */
    static readonly SHOPPING_CARD_FOOT_TITLES = (context: Context): string[] => [
        context.resourceManager.getStringSync({ "id": 67108995, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108996, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        '￥', '1299',
        context.resourceManager.getStringSync({ "id": 67108997, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108998, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id)
    ];
    /**
     * Shopping card name list.
     */
    static readonly SHOPPING_CARD_NAMES = (context: Context): string[] => ['￥', '-', '1', '+',
        context.resourceManager.getStringSync({ "id": 67108953, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
        context.resourceManager.getStringSync({ "id": 67108954, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }.id),
    ];
}

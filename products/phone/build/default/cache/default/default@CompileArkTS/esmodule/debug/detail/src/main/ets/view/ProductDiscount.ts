import { BreakpointType, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { DetailConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/DetailConstants";
import { RightArrow } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/CommonView";
export function ProductDiscount(pageBreakpoint: string, context: Context = this.getUIContext().getHostContext()!, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.alignItems(HorizontalAlign.Start);
        Column.backgroundColor(Color.White);
        Column.width(CommonConstants.FULL_PERCENT);
        Column.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
        Column.padding({ "id": 67109512, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Column.margin({ bottom: new BreakpointType({ "id": 67109511, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109510, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109509, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(pageBreakpoint) });
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(DetailConstants.PRODUCT_DISCOUNT_NAMES(context)[0]);
        Text.fontSize({ "id": 67109514, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.lineHeight({ "id": 67109516, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        Text.margin({ bottom: { "id": 67109517, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(DetailConstants.PRODUCT_DISCOUNT_NAMES(context)[1]);
        Text.fontSize({ "id": 67109515, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontColor({ "id": 67109436, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.lineHeight({ "id": 67109516, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.margin({ bottom: { "id": 67109518, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.padding({
            left: { "id": 67109513, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            right: { "id": 67109513, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
        Row.borderRadius(ResourceUtil.getCommonBorderRadius()[5]);
        Row.backgroundColor({ "id": 67109434, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Row.width(CommonConstants.FULL_PERCENT);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(DetailConstants.PRODUCT_DISCOUNT_NAMES(context)[2]);
        Text.fontSize({ "id": 67109515, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontColor({ "id": 67109436, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.margin({ right: { "id": 67109519, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(DetailConstants.PRODUCT_DISCOUNT_NAMES(context)[3]);
        Text.layoutWeight(1);
        Text.fontSize({ "id": 67109515, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.maxLines(1);
        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Blank.create();
    }, Blank);
    Blank.pop();
    RightArrow.bind(this)();
    Row.pop();
    Column.pop();
}

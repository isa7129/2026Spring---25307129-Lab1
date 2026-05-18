if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ProductPrice_Params {
    pageBreakpoint?: string;
    context?: Context;
}
import { BreakpointConstants, BreakpointType, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { DetailConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/DetailConstants";
import { RightArrow } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/CommonView";
export class ProductPrice extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__pageBreakpoint = new SynchedPropertySimpleOneWayPU(params.pageBreakpoint, this, "pageBreakpoint");
        this.context = this.getUIContext().getHostContext()!;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ProductPrice_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: ProductPrice_Params) {
        this.__pageBreakpoint.reset(params.pageBreakpoint);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__pageBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__pageBreakpoint.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __pageBreakpoint: SynchedPropertySimpleOneWayPU<string>;
    get pageBreakpoint() {
        return this.__pageBreakpoint.get();
    }
    set pageBreakpoint(newValue: string) {
        this.__pageBreakpoint.set(newValue);
    }
    private context: Context;
    aboutToAppear(): void {
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            Column.backgroundColor(Color.White);
            Column.width(CommonConstants.FULL_PERCENT);
            Column.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
            Column.padding({ "id": 67109614, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.margin({
                top: this.pageBreakpoint !== BreakpointConstants.BREAKPOINT_LG ? { "id": 67109613, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0,
                bottom: new BreakpointType({ "id": 67109612, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109611, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109610, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.pageBreakpoint)
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 67109636, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.borderRadius(ResourceUtil.getCommonBorderRadius()[3]);
            Row.padding({
                left: { "id": 67109635, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                right: { "id": 67109635, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                bottom: { "id": 67109634, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
            Row.alignItems(VerticalAlign.Bottom);
            Row.linearGradient({
                direction: GradientDirection.Right,
                repeating: false,
                colors: [[DetailConstants.GRADIENT_COLORS[0], 0.0], [DetailConstants.GRADIENT_COLORS[1], 1.0]]
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[0]);
            Text.fontSize({ "id": 67109624, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109629, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.fontColor(Color.White);
            Text.displayPriority(4);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[1]);
            Text.fontSize({ "id": 67109625, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109630, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.fontColor(Color.White);
            Text.displayPriority(4);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[2]);
            Text.decoration({
                type: TextDecorationType.LineThrough,
                color: Color.White
            });
            Text.opacity(CommonConstants.TEXT_OPACITY[2]);
            Text.fontSize({ "id": 67109626, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.opacity(CommonConstants.TEXT_OPACITY[2]);
            Text.fontColor(Color.White);
            Text.displayPriority(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.displayPriority(2);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.displayPriority(3);
        }, Row);
        this.TimeTip.bind(this)(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[3]);
        this.TimeText.bind(this)(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[4]);
        this.TimeTip.bind(this)(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[5]);
        this.TimeText.bind(this)(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[6]);
        this.TimeTip.bind(this)(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[7]);
        this.TimeText.bind(this)(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[8]);
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
            Row.margin({
                top: { "id": 67109616, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                bottom: { "id": 67109615, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[9]);
            Text.fontSize({ "id": 67109626, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.lineHeight({ "id": 67109631, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.opacity(CommonConstants.TEXT_OPACITY[2]);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        RightArrow.bind(this)();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
            Row.margin({ bottom: { "id": 67109620, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Row);
        this.ProductTag.bind(this)(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[10]);
        this.ProductTag.bind(this)(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[11]);
        this.ProductTag.bind(this)(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[12]);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.displayPriority(2);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.displayPriority(1);
            Row.width(this.pageBreakpoint !== BreakpointConstants.BREAKPOINT_LG ? { "id": 67109621, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109622, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.borderRadius(ResourceUtil.getCommonBorderRadius()[5]);
            Row.height({ "id": 67109619, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.backgroundColor({ "id": 67109435, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[13]);
            Text.fontColor(Color.White);
            Text.fontSize({ "id": 67109626, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.alignItems(VerticalAlign.Top);
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 67109618, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109742, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.opacity(CommonConstants.TEXT_OPACITY[2]);
            Image.width(ResourceUtil.getCommonImgSize()[6]);
            Image.height(ResourceUtil.getCommonImgSize()[6]);
            Image.margin({ right: { "id": 67109617, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.layoutWeight(1);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[14]);
            Text.fontSize({ "id": 67109626, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.lineHeight({ "id": 67109631, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.opacity(CommonConstants.TEXT_OPACITY[2]);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        RightArrow.bind(this)();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.PRODUCT_PRICE_NAMES(this.context)[15]);
            Text.fontSize({ "id": 67109626, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109631, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.margin({ top: { "id": 67109617, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        Column.pop();
    }
    TimeText(timeText: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.padding({
                left: { "id": 67109715, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                right: { "id": 67109715, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
            Row.height({ "id": 67109714, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.width({ "id": 67109716, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.borderRadius(ResourceUtil.getCommonBorderRadius()[0]);
            Row.backgroundColor({ "id": 67109444, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(timeText);
            Text.fontSize({ "id": 67109627, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109632, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.width({ "id": 67109633, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Row.pop();
    }
    TimeTip(tipText: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(tipText);
            Text.fontSize({ "id": 67109628, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109633, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
    }
    ProductTag(tagText: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.displayPriority(3);
            Row.height({ "id": 67109639, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.opacity(CommonConstants.TEXT_OPACITY[2]);
            Row.borderRadius(ResourceUtil.getCommonBorderRadius()[1]);
            Row.borderColor({ "id": 67109431, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.borderWidth({ "id": 67109638, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.padding({
                left: { "id": 67109641, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                right: { "id": 67109641, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
            Row.margin({ right: { "id": 67109640, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Row.linearGradient({
                direction: GradientDirection.Right,
                repeating: false,
                colors: [[DetailConstants.GRADIENT_COLORS[2], 0.0], [DetailConstants.GRADIENT_COLORS[3], 1.0]]
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(tagText);
            Text.fontSize({ "id": 67109627, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109632, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontColor({ "id": 67109438, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.maxLines(1);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

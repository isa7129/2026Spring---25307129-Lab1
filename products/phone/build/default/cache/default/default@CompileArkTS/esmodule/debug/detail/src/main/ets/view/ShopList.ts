if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ShopList_Params {
    currentBreakpoint?: string;
    PayCardButton?: () => void;
    shopCarProduct?: ShopCarProduct[];
}
import { BreakpointConstants, BreakpointType, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { LiveConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/LiveConstants";
import { ShopCarModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/viewmodel/ShopCarViewModel";
import type { ShopCarProduct } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/viewmodel/ShopCarViewModel";
export class ShopList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.PayCardButton = this.payCardBuilder;
        this.shopCarProduct = new ShopCarModel(this.getUIContext().getHostContext()!).getShopCarProductList();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ShopList_Params) {
        if (params.PayCardButton !== undefined) {
            this.PayCardButton = params.PayCardButton;
        }
        if (params.shopCarProduct !== undefined) {
            this.shopCarProduct = params.shopCarProduct;
        }
    }
    updateStateVars(params: ShopList_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    payCardBuilder(parent = null) { }
    private __PayCardButton;
    private shopCarProduct: ShopCarProduct[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.alignSelf(ItemAlign.Start);
            Row.backgroundColor({ "id": 67109430, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.height({ "id": 67109605, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.borderRadius(ResourceUtil.getCommonBorderRadius()[5]);
            Row.padding({
                left: { "id": 67109609, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                right: { "id": 67109609, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
            Row.margin({ bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109608, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109607, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 67109412, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.fontSize({ "id": 67109604, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109606, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.backgroundColor(Color.White);
                    Row.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
                    Row.margin({ bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109471, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109470, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.getImage());
                    Image.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109469, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109468, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Image.aspectRatio(1);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109467, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109466, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Column.padding({
                        top: { "id": 67109475, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                        bottom: { "id": 67109474, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                        left: { "id": 67109474, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                        right: new BreakpointType({ "id": 67109475, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109474, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109475, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                    });
                    Column.layoutWeight(1);
                    Column.alignItems(HorizontalAlign.Start);
                    Column.justifyContent(FlexAlign.Start);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getName());
                    Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                    Text.maxLines(1);
                    Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                    Text.fontSize({ "id": 67109472, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.margin({ bottom: { "id": 67109473, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getRemark());
                    Text.fontSize({ "id": 67109476, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.fontWeight(FontWeight.Normal);
                    Text.maxLines(1);
                    Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                    Text.fontColor({ "id": 67109419, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.margin({ bottom: { "id": 67109477, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(CommonConstants.FULL_PERCENT);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = (_item, index: number) => {
                        const discountsItem = _item;
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.layoutWeight(index > 0 ? 1 : 0);
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(discountsItem);
                            Text.fontWeight(FontWeight.Normal);
                            Text.fontColor({ "id": 67109417, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Text.fontSize({ "id": 67109461, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Text.maxLines(1);
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                            Text.padding({
                                top: { "id": 67109464, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                bottom: { "id": 67109464, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                left: { "id": 67109463, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                right: { "id": 67109463, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                            });
                            Text.border({
                                radius: { "id": 67109459, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                color: { "id": 67109416, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                width: { "id": 67109460, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                            });
                            Text.margin({ right: { "id": 67109462, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                        }, Text);
                        Text.pop();
                        Row.pop();
                    };
                    this.forEachUpdateFunction(elmtId, item.getDiscounts(), forEachItemGenFunction, (discountsItem: string, index: number) => discountsItem + index, true, true);
                }, ForEach);
                ForEach.pop();
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(CommonConstants.FULL_PERCENT);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(LiveConstants.CURRENCY_SYMBOL + JSON.stringify(item.getPrice()));
                    Text.fontColor({ "id": 67109418, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.fontSize({ "id": 67109465, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                    Text.displayPriority(1);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.displayPriority(2);
                }, Blank);
                Blank.pop();
                this.PayCardButton.bind(this)();
                Row.pop();
                Column.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.shopCarProduct, forEachItemGenFunction, (item: ShopCarProduct, index: number) => JSON.stringify(item) + index, false, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

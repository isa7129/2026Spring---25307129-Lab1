if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ShoppingBagDiscounts_Params {
    currentBreakpoint?: string;
    topRectHeight?: number;
    context?: Context;
    ShoppingBagList?: ShoppingBagProduct[];
    PreferenceDetailsList?: PreferenceDetails[];
    ShoppingBagProductItem?: ShoppingBagProduct;
}
import { BreakpointConstants, ResourceUtil, CommonConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import deviceInfo from "@ohos:deviceInfo";
import { ShoppingCardItem } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/ShoppingCardItem";
import { ShoppingBagListViewModel, PreferenceDetailsList } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/ShoppingBagListViewModel";
import type { ShoppingBagProduct, PreferenceDetails } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/ShoppingBagListViewModel";
import { ShoppingCardFoot } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/ShoppingCardFoot";
import { ShoppingBagConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/ShoppingBagConstants";
export class ShoppingBagDiscounts extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.context = this.getUIContext().getHostContext()!;
        this.ShoppingBagList = new ShoppingBagListViewModel(this.context).getShoppingBagItemData();
        this.PreferenceDetailsList = new PreferenceDetailsList(this.context).getPreferenceDetailsList();
        this.ShoppingBagProductItem = this.ShoppingBagList[2];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ShoppingBagDiscounts_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.ShoppingBagList !== undefined) {
            this.ShoppingBagList = params.ShoppingBagList;
        }
        if (params.PreferenceDetailsList !== undefined) {
            this.PreferenceDetailsList = params.PreferenceDetailsList;
        }
        if (params.ShoppingBagProductItem !== undefined) {
            this.ShoppingBagProductItem = params.ShoppingBagProductItem;
        }
    }
    updateStateVars(params: ShoppingBagDiscounts_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
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
    private __topRectHeight: ObservedPropertyAbstractPU<number>;
    get topRectHeight() {
        return this.__topRectHeight.get();
    }
    set topRectHeight(newValue: number) {
        this.__topRectHeight.set(newValue);
    }
    private context: Context;
    private ShoppingBagList: ShoppingBagProduct[];
    private PreferenceDetailsList: PreferenceDetails[];
    private ShoppingBagProductItem: ShoppingBagProduct;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor({ "id": 67109012, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.layoutWeight(ShoppingBagConstants.SHOPPING_BAG_LAYOUT_WEIGHTS[1]);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Visibility.Visible : Visibility.None);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.width(CommonConstants.FULL_PERCENT);
            Scroll.scrollBarWidth(0);
            Scroll.layoutWeight(1);
            Scroll.backgroundColor(ResourceUtil.getCommonBackgroundColor()[0]);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.alignItems(HorizontalAlign.Start);
            Column.justifyContent(FlexAlign.Start);
            Column.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? { "id": 67109053, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : this.topRectHeight,
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(ShoppingBagConstants.SHOPPING_DISCOUNT_TITLES(this.context)[0]);
            Text.fontSize({ "id": 67109054, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.lineHeight({ "id": 67109057, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(ShoppingBagConstants.SHOPPING_DISCOUNT_TITLES(this.context)[1]);
            Text.fontSize({ "id": 67109055, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109058, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.padding({
                top: { "id": 67109064, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                bottom: { "id": 67109063, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(Color.White);
            Column.padding({ "id": 67109061, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.border({ radius: ResourceUtil.getCommonBorderRadius()[6] });
            Column.margin({ bottom: { "id": 67109060, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Column);
        ShoppingCardItem.bind(this)(this.ShoppingBagProductItem, true);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 67109062, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(ShoppingBagConstants.SHOPPING_DISCOUNT_TITLES(this.context)[2]);
            Text.fontSize({ "id": 67109056, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(ShoppingBagConstants.SHOPPING_DISCOUNT_TITLES(this.context)[3]);
            Text.fontSize({ "id": 67109055, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.Center);
            Row.height({ "id": 67109062, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(ShoppingBagConstants.SHOPPING_DISCOUNT_TITLES(this.context)[4]);
            Text.fontSize({ "id": 67109056, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(ShoppingBagConstants.SHOPPING_DISCOUNT_TITLES(this.context)[5]);
            Text.fontSize({ "id": 67109055, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109307, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.height(ResourceUtil.getCommonImgSize()[0]);
            Image.width(ResourceUtil.getCommonImgSize()[0]);
        }, Image);
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(Color.White);
            Column.padding({ "id": 67109061, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.border({ radius: ResourceUtil.getCommonBorderRadius()[6] });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.justifyContent(FlexAlign.Center);
                    Row.height({ "id": 67109062, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Row.width(CommonConstants.FULL_PERCENT);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getTitle());
                    Text.fontSize({ "id": 67109056, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.fontWeight(FontWeight.Normal);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getPrice());
                    Text.fontSize({ "id": 67109055, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.fontColor('#CF0A2C');
                }, Text);
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.PreferenceDetailsList, forEachItemGenFunction, (item: PreferenceDetails, index: number) => JSON.stringify(item) + index, false, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.margin({ bottom: deviceInfo.deviceType !== CommonConstants.DEVICE_TYPES[0] ?
                    CommonConstants.BOTTOM_RECT_HEIGHT : 0 });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ShoppingCardFoot(this, { isMoreDetail: true }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/ShoppingBagDiscounts.ets", line: 122, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isMoreDetail: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ShoppingCardFoot" });
        }
        __Common__.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

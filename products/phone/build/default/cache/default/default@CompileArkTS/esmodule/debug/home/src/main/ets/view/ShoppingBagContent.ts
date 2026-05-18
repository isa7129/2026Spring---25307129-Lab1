if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DetailShoppingBagView_Params {
    currentBreakpoint?: string;
    topRectHeight?: number;
    pageInfos?: NavPathStack;
    isMoreDetail?: boolean;
    context?: Context;
}
interface ShoppingBagView_Params {
    currentBreakpoint?: string;
    topRectHeight?: number;
    context?: Context;
}
interface ShoppingBagContent_Params {
    currentBreakpoint?: string;
}
import { BreakpointConstants, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import deviceInfo from "@ohos:deviceInfo";
import { ShoppingCardFoot } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/ShoppingCardFoot";
import { ShoppingBagDiscounts } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/ShoppingBagDiscounts";
import { ShoppingBagListViewModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/ShoppingBagListViewModel";
import type { ShoppingBagProduct } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/ShoppingBagListViewModel";
import { ShoppingCardItem } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/ShoppingCardItem";
import { ShoppingBagConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/ShoppingBagConstants";
export class ShoppingBagContent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ShoppingBagContent_Params) {
    }
    updateStateVars(params: ShoppingBagContent_Params) {
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height(CommonConstants.FULL_PERCENT);
            Row.backgroundColor(ResourceUtil.getCommonBackgroundColor()[0]);
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ShoppingBagView(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/ShoppingBagContent.ets", line: 30, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ShoppingBagView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ShoppingBagDiscounts(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/ShoppingBagContent.ets", line: 31, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ShoppingBagDiscounts" });
        }
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ShoppingBagView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.context = this.getUIContext().getHostContext()!;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ShoppingBagView_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: ShoppingBagView_Params) {
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
            });
            Column.layoutWeight(ShoppingBagConstants.SHOPPING_BAG_LAYOUT_WEIGHTS[0]);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.border({
                width: { right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? 1 : 0 },
                color: ResourceUtil.getCommonBorderColor()[1]
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.layoutWeight(1);
            Column.margin({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? { "id": 67109052, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                    this.topRectHeight });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 67109069, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(ShoppingBagConstants.SHOPPING_BAG_TITLES(this.context)[0]);
            Text.font({
                size: { "id": 67109068, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                weight: CommonConstants.FONT_WEIGHT_500
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(ShoppingBagConstants.SHOPPING_BAG_TITLES(this.context)[1]);
            Text.font({
                size: { "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
            Text.opacity(CommonConstants.TEXT_OPACITY[2]);
        }, Text);
        Text.pop();
        Row.pop();
        ShoppingBagCard.bind(this)();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Visibility.None : Visibility.Visible);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ShoppingCardFoot(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/ShoppingBagContent.ets", line: 71, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
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
export class DetailShoppingBagView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.__pageInfos = this.initializeConsume('pageInfos', "pageInfos");
        this.isMoreDetail = false;
        this.context = this.getUIContext().getHostContext()!;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DetailShoppingBagView_Params) {
        if (params.isMoreDetail !== undefined) {
            this.isMoreDetail = params.isMoreDetail;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: DetailShoppingBagView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
        this.__pageInfos.aboutToBeDeleted();
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
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    public isMoreDetail: boolean;
    private context: Context;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
            });
            Column.layoutWeight(ShoppingBagConstants.SHOPPING_BAG_LAYOUT_WEIGHTS[0]);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.border({
                width: { right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? 1 : 0 },
                color: ResourceUtil.getCommonBorderColor()[1]
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.layoutWeight(1);
            Column.margin({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? { "id": 67109052, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                    this.topRectHeight });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 67109069, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109305, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.width(ResourceUtil.getCommonImgSize()[0]);
            Image.height(ResourceUtil.getCommonImgSize()[0]);
            Image.margin({ right: { "id": 67109044, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Image.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM && this.isMoreDetail ?
                Visibility.Visible : Visibility.None);
            Image.onClick(() => {
                if (this.pageInfos !== undefined) {
                    this.pageInfos.pop();
                }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(ShoppingBagConstants.SHOPPING_BAG_TITLES(this.context)[0]);
            Text.font({
                size: { "id": 67109068, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                weight: CommonConstants.FONT_WEIGHT_500
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(ShoppingBagConstants.SHOPPING_BAG_TITLES(this.context)[1]);
            Text.font({ size: { "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Text.opacity(CommonConstants.TEXT_OPACITY[2]);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109310, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.width(ResourceUtil.getCommonImgSize()[0]);
            Image.height(ResourceUtil.getCommonImgSize()[0]);
            Image.margin({ left: { "id": 67109051, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Image.visibility(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM ? Visibility.Visible :
                Visibility.None);
            Image.onClick(() => {
                if (this.pageInfos !== undefined) {
                    this.pageInfos.pop();
                }
            });
        }, Image);
        Row.pop();
        ShoppingBagCard.bind(this)();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.margin({ bottom: deviceInfo.deviceType !== CommonConstants.DEVICE_TYPES[0] ?
                    CommonConstants.BOTTOM_RECT_HEIGHT : 0 });
            __Common__.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && !this.isMoreDetail ?
                Visibility.None : Visibility.Visible);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ShoppingCardFoot(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/ShoppingBagContent.ets", line: 141, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
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
function ShoppingBagCard(context: Context = this.getUIContext().getHostContext()!, ShoppingBagList: ShoppingBagProduct[] = new ShoppingBagListViewModel(this.context).getShoppingBagItemData(), parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Scroll.create();
        Scroll.scrollBar(BarState.Off);
        Scroll.layoutWeight(1);
        Scroll.width(CommonConstants.FULL_PERCENT);
    }, Scroll);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.width(CommonConstants.FULL_PERCENT);
        Column.backgroundColor(Color.White);
        Column.borderRadius(ResourceUtil.getCommonBorderRadius()[7]);
        Column.padding({ "id": 67109048, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Column.margin({ bottom: CommonConstants.BOTTOM_RECT_HEIGHT });
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.height({ "id": 67109050, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Row.width(CommonConstants.FULL_PERCENT);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        CheckboxGroup.create({ group: 'shoppingCardHuaWei' });
        CheckboxGroup.selectedColor({ "id": 67109020, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        CheckboxGroup.width({ "id": 67109122, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        CheckboxGroup.height({ "id": 67109122, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        CheckboxGroup.margin({ right: { "id": 67109121, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        CheckboxGroup.border({ color: ResourceUtil.getCommonBorderColor()[2] });
    }, CheckboxGroup);
    CheckboxGroup.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Image.create({ "id": 67109324, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Image.width(ResourceUtil.getCommonImgSize()[0]);
        Image.height(ResourceUtil.getCommonImgSize()[0]);
        Image.margin({ right: { "id": 67109067, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        Image.border({
            radius: ResourceUtil.getCommonBorderRadius()[4],
            width: { "id": 67109066, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            color: ResourceUtil.getCommonBorderColor()[3]
        });
    }, Image);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(ShoppingBagConstants.SHOPPING_BAG_TITLES(context)[2]);
        Text.font({
            size: { "id": 67109065, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            weight: CommonConstants.FONT_WEIGHT_500
        });
        Text.layoutWeight(1);
    }, Text);
    Text.pop();
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        List.create();
        List.scrollBar(BarState.Off);
    }, List);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        ForEach.create();
        const forEachItemGenFunction = _item => {
            const item = _item;
            {
                const itemCreation = (elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    ListItem.create(deepRenderFunction, true);
                    if (!isInitialRender) {
                        ListItem.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                };
                const itemCreation2 = (elmtId, isInitialRender) => {
                    ListItem.create(deepRenderFunction, true);
                };
                const deepRenderFunction = (elmtId, isInitialRender) => {
                    itemCreation(elmtId, isInitialRender);
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width(CommonConstants.FULL_PERCENT);
                        Row.padding({
                            top: { "id": 67109049, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                            bottom: { "id": 67109049, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                        });
                    }, Row);
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width({ "id": 67109047, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                        Column.padding({ top: { "id": 67109046, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                        Column.justifyContent(FlexAlign.Start);
                    }, Column);
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        Checkbox.create({ group: 'shoppingCardHuaWei' });
                        Checkbox.selectedColor({ "id": 67109020, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                        Checkbox.width({ "id": 67109122, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                        Checkbox.height({ "id": 67109122, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                        Checkbox.margin({
                            right: { "id": 67109045, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                            left: 0
                        });
                        Checkbox.border({
                            color: ResourceUtil.getCommonBorderColor()[2]
                        });
                        Checkbox.shape(CheckBoxShape.ROUNDED_SQUARE);
                    }, Checkbox);
                    Checkbox.pop();
                    Column.pop();
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.layoutWeight(1);
                    }, Column);
                    ShoppingCardItem.bind(this)(item, false);
                    Column.pop();
                    Row.pop();
                    ListItem.pop();
                };
                this.observeComponentCreation2(itemCreation2, ListItem);
                ListItem.pop();
            }
        };
        (parent ? parent : this).forEachUpdateFunction(elmtId, ShoppingBagList, forEachItemGenFunction, (item: ShoppingBagProduct) => item.getName(), false, false);
    }, ForEach);
    ForEach.pop();
    List.pop();
    Column.pop();
    Scroll.pop();
}

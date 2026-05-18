if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Categories_Params {
    currentBreakpoint?: string;
    isNextCategory?: boolean;
    context?: Context;
    categoryIcons?: IconInfo[];
}
import { BreakpointConstants, BreakpointType, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/HomeConstants";
import { IconInfoViewModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/IconInfoViewModel";
import type { IconInfo } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/IconInfoViewModel";
export class Categories extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__isNextCategory = new ObservedPropertySimplePU(false, this, "isNextCategory");
        this.context = this.getUIContext().getHostContext()!;
        this.categoryIcons = new IconInfoViewModel(this.context).getCategoryList();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Categories_Params) {
        if (params.isNextCategory !== undefined) {
            this.isNextCategory = params.isNextCategory;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.categoryIcons !== undefined) {
            this.categoryIcons = params.categoryIcons;
        }
    }
    updateStateVars(params: Categories_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isNextCategory.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isNextCategory.aboutToBeDeleted();
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
    private __isNextCategory: ObservedPropertySimplePU<boolean>;
    get isNextCategory() {
        return this.__isNextCategory.get();
    }
    set isNextCategory(newValue: boolean) {
        this.__isNextCategory.set(newValue);
    }
    private context: Context;
    private categoryIcons: IconInfo[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(new BreakpointType({ "id": 67109104, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109103, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109102, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint));
            Column.width(CommonConstants.FULL_PERCENT);
            Column.margin({
                top: this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM ? { "id": 67109105, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0,
                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109106, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: new BreakpointType(HomeConstants.CATEGORY_LIST_SPACES[0], HomeConstants.CATEGORY_LIST_SPACES[1], HomeConstants.CATEGORY_LIST_SPACES[2]).getValue(this.currentBreakpoint) });
            List.lanes(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? 2 : 1, { "id": 67109115, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            List.listDirection(Axis.Horizontal);
            List.scrollBar(BarState.Off);
            List.width(CommonConstants.FULL_PERCENT);
            List.height(new BreakpointType({ "id": 67109118, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109117, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109116, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint));
            List.onScrollIndex((start: number, end: number) => {
                if (end === HomeConstants.NINE) {
                    this.isNextCategory = true;
                }
                if (start === 0) {
                    this.isNextCategory = false;
                }
            });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
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
                        ListItem.width(new BreakpointType(HomeConstants.CATEGORY_LIST_ITEM_WIDTHS[0], HomeConstants.CATEGORY_LIST_ITEM_WIDTHS[1], HomeConstants.CATEGORY_LIST_ITEM_WIDTHS[2]).
                            getValue(this.currentBreakpoint));
                        ListItem.height(new BreakpointType({ "id": 67109114, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109113, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109112, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint));
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.width(CommonConstants.FULL_PERCENT);
                            Row.height(CommonConstants.FULL_PERCENT);
                            Row.justifyContent(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? FlexAlign.Center :
                                FlexAlign.Start);
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create(item.getIcon());
                            Image.height(new BreakpointType({ "id": 67109111, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109110, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109109, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint));
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.getInfo());
                            Text.fontSize({ "id": 67109119, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Text.fontWeight(FontWeight.Normal);
                            Text.lineHeight({ "id": 67109120, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                        }, Text);
                        Text.pop();
                        Column.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.categoryIcons, forEachItemGenFunction, (item: IconInfo, index: number) => JSON.stringify(item) + index, false, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width(CommonConstants.FULL_PERCENT);
                        Row.height({ "id": 67109107, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                        Row.justifyContent(FlexAlign.Center);
                        Row.margin({ right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint) });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Divider.create();
                        Divider.color(this.isNextCategory ? { "id": 67109016, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109015, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                        Divider.width({ "id": 67109108, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                        Divider.strokeWidth(HomeConstants.CATEGORY_DIVIDER_STROKE_WIDTH);
                        Divider.lineCap(LineCapStyle.Round);
                    }, Divider);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Divider.create();
                        Divider.color(this.isNextCategory ? { "id": 67109015, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109016, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                        Divider.width({ "id": 67109108, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                        Divider.strokeWidth(HomeConstants.CATEGORY_DIVIDER_STROKE_WIDTH);
                        Divider.lineCap(LineCapStyle.Round);
                    }, Divider);
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

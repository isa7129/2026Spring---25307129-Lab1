if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ClassifyShopList_Params {
    currentBreakpoint?: string;
    pageInfos?: NavPathStack;
    context?: Context;
    shopList?: ShopListViewModel;
}
import { BreakpointConstants, BreakpointType, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { ClassifyConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/ClassifyConstants";
import { ShopListViewModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/ShopListViewModel";
import type { ShopListItem, ShopItem } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/ShopListViewModel";
export class ClassifyShopList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__pageInfos = this.initializeConsume('pageInfos', "pageInfos");
        this.context = this.getUIContext().getHostContext()!;
        this.shopList = new ShopListViewModel(this.context);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ClassifyShopList_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.shopList !== undefined) {
            this.shopList = params.shopList;
        }
    }
    updateStateVars(params: ClassifyShopList_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
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
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    private context: Context;
    private shopList: ShopListViewModel;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.padding({ right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint) });
            List.margin({ bottom: { "id": 67109231, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
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
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.backgroundColor(Color.White);
                            Column.border({ radius: ResourceUtil.getCommonBorderRadius()[6] });
                            Column.width(CommonConstants.FULL_PERCENT);
                            Column.padding({
                                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109228, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109227, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109228, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109227, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                bottom: { "id": 67109227, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                            });
                            Column.margin({
                                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109226, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109225, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                            });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.height({ "id": 67109232, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Row.width(CommonConstants.FULL_PERCENT);
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.getName());
                            Text.font({
                                size: { "id": 67109230, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                weight: CommonConstants.FONT_WEIGHT_500
                            });
                            Text.textAlign(TextAlign.Start);
                        }, Text);
                        Text.pop();
                        Row.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            GridRow.create({
                                columns: new BreakpointType(BreakpointConstants.GRID_ROW_COLUMNS[5], BreakpointConstants.GRID_ROW_COLUMNS[6], BreakpointConstants.GRID_ROW_COLUMNS[1])
                                    .getValue(this.currentBreakpoint),
                                gutter: {
                                    x: ClassifyConstants.GRID_ROW_GUTTERS[0],
                                    y: new BreakpointType(ClassifyConstants.GRID_ROW_GUTTERS[1], ClassifyConstants.GRID_ROW_GUTTERS[2], ClassifyConstants.GRID_ROW_GUTTERS[3]).getValue(this.currentBreakpoint)
                                }
                            });
                            GridRow.padding({
                                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109229, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                                    0,
                                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109229, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                                    0,
                            });
                        }, GridRow);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            ForEach.create();
                            const forEachItemGenFunction = _item => {
                                const item = _item;
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    GridCol.create({ span: 1 });
                                }, GridCol);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Column.create();
                                    Column.onClick(() => {
                                        this.pageInfos.pushPath({ name: ClassifyConstants.PAGE_INFO_LIST[2] });
                                    });
                                }, Column);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Image.create(item.getImage());
                                    Image.width(CommonConstants.FULL_PERCENT);
                                    Image.aspectRatio(1);
                                }, Image);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(item.getName());
                                    Text.fontSize({ "id": 67109171, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                                    Text.fontWeight(FontWeight.Normal);
                                    Text.maxLines(2);
                                    Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                                }, Text);
                                Text.pop();
                                Column.pop();
                                GridCol.pop();
                            };
                            this.forEachUpdateFunction(elmtId, item.getItem(), forEachItemGenFunction, (item: ShopItem, index: number) => JSON.stringify(item) + index, false, true);
                        }, ForEach);
                        ForEach.pop();
                        GridRow.pop();
                        Column.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.shopList.getShopList(), forEachItemGenFunction, (item: ShopListItem, index: number) => JSON.stringify(item) + index, false, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

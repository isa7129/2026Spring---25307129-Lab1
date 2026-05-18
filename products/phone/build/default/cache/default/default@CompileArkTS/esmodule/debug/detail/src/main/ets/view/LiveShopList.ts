if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface LiveShopList_Params {
    realBreakpoint?: string;
    currentProductIndex?: number;
    currentBreakpoint?: string;
    liveProductList?: LiveProduct[];
    detailType?: string;
    isMoreDetail?: boolean;
    scroller?: Scroller;
}
import { BreakpointConstants, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { LiveViewModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/viewmodel/LiveViewModel";
import type { LiveProduct } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/viewmodel/LiveViewModel";
import { LiveConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/LiveConstants";
export class LiveShopList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__realBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "realBreakpoint");
        this.__currentProductIndex = new ObservedPropertySimplePU(0, this, "currentProductIndex");
        this.__currentBreakpoint = new SynchedPropertySimpleOneWayPU(params.currentBreakpoint, this, "currentBreakpoint");
        this.__liveProductList = new ObservedPropertyObjectPU(new LiveViewModel().getProductList().reverse(), this, "liveProductList");
        this.__detailType = new SynchedPropertySimpleTwoWayPU(params.detailType, this, "detailType");
        this.__isMoreDetail = new SynchedPropertySimpleTwoWayPU(params.isMoreDetail, this, "isMoreDetail");
        this.scroller = new Scroller();
        this.setInitiallyProvidedValue(params);
        this.declareWatch("currentBreakpoint", this.getLiveProductList);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LiveShopList_Params) {
        if (params.currentProductIndex !== undefined) {
            this.currentProductIndex = params.currentProductIndex;
        }
        if (params.currentBreakpoint === undefined) {
            this.__currentBreakpoint.set(BreakpointConstants.BREAKPOINT_LG);
        }
        if (params.liveProductList !== undefined) {
            this.liveProductList = params.liveProductList;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
    }
    updateStateVars(params: LiveShopList_Params) {
        this.__currentBreakpoint.reset(params.currentBreakpoint);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__realBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__currentProductIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__liveProductList.purgeDependencyOnElmtId(rmElmtId);
        this.__detailType.purgeDependencyOnElmtId(rmElmtId);
        this.__isMoreDetail.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__realBreakpoint.aboutToBeDeleted();
        this.__currentProductIndex.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__liveProductList.aboutToBeDeleted();
        this.__detailType.aboutToBeDeleted();
        this.__isMoreDetail.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __realBreakpoint: ObservedPropertyAbstractPU<string>;
    get realBreakpoint() {
        return this.__realBreakpoint.get();
    }
    set realBreakpoint(newValue: string) {
        this.__realBreakpoint.set(newValue);
    }
    private __currentProductIndex: ObservedPropertySimplePU<number>;
    get currentProductIndex() {
        return this.__currentProductIndex.get();
    }
    set currentProductIndex(newValue: number) {
        this.__currentProductIndex.set(newValue);
    }
    private __currentBreakpoint: SynchedPropertySimpleOneWayPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __liveProductList: ObservedPropertyObjectPU<LiveProduct[]>;
    get liveProductList() {
        return this.__liveProductList.get();
    }
    set liveProductList(newValue: LiveProduct[]) {
        this.__liveProductList.set(newValue);
    }
    private __detailType: SynchedPropertySimpleTwoWayPU<string>;
    get detailType() {
        return this.__detailType.get();
    }
    set detailType(newValue: string) {
        this.__detailType.set(newValue);
    }
    private __isMoreDetail: SynchedPropertySimpleTwoWayPU<boolean>;
    get isMoreDetail() {
        return this.__isMoreDetail.get();
    }
    set isMoreDetail(newValue: boolean) {
        this.__isMoreDetail.set(newValue);
    }
    private scroller: Scroller;
    aboutToAppear(): void {
        this.getLiveProductList();
    }
    getLiveProductList(): void {
        if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) {
            this.liveProductList = new LiveViewModel().getProductList().reverse();
            this.currentProductIndex = this.liveProductList.length - 1;
        }
        else {
            this.liveProductList = new LiveViewModel().getProductList();
            this.currentProductIndex = 0;
        }
        this.scroller.scrollToIndex(this.currentProductIndex);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({
                space: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? LiveConstants.SHOPPING_LIST_SPACE[0] :
                    LiveConstants.SHOPPING_LIST_SPACE[1],
                initialIndex: this.currentProductIndex,
                scroller: this.scroller
            });
            List.edgeEffect(EdgeEffect.Fade);
            List.alignListItem(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? ListItemAlign.End :
                ListItemAlign.Start);
            List.scrollBar(BarState.Off);
            List.height(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_LG ? { "id": 67109695, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                CommonConstants.FULL_PERCENT);
            List.width(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_LG ? CommonConstants.FULL_PERCENT : { "id": 67109697, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            List.listDirection(this.currentBreakpoint === 'lg' ? Axis.Vertical : Axis.Horizontal);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
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
                            Row.create();
                            Row.borderRadius(ResourceUtil.getCommonBorderRadius()[3]);
                            Row.backgroundColor(Color.White);
                            Row.width(index === this.currentProductIndex ? (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109697, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109696, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }) :
                                (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109698, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109695, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }));
                            Row.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109698, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109695, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Row.onClick(() => {
                                if (this.realBreakpoint !== BreakpointConstants.BREAKPOINT_SM) {
                                    this.isMoreDetail = true;
                                    this.detailType = CommonConstants.BIND_SHEET_PAGE_TYPES[2];
                                }
                            });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create(item.getImage());
                            Image.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109678, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109677, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Image.aspectRatio(1);
                            Image.borderRadius(ResourceUtil.getCommonBorderRadius()[3]);
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.alignItems(HorizontalAlign.Start);
                            Column.visibility(index === this.currentProductIndex ? Visibility.Visible : Visibility.None);
                            Column.padding({
                                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109694, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109693, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109691, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109690, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109692, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0
                            });
                            Column.layoutWeight(1);
                            Column.height(CommonConstants.FULL_PERCENT);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.getName());
                            Text.fontSize({ "id": 67109681, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Text.lineHeight({ "id": 67109682, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                            Text.maxLines(1);
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                            Text.margin({
                                bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109684, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109683, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                            });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.getPrice());
                            Text.fontSize({ "id": 67109681, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Text.lineHeight({ "id": 67109682, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                            Text.fontColor({ "id": 67109439, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
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
            this.forEachUpdateFunction(elmtId, this.liveProductList, forEachItemGenFunction, (item: LiveProduct, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

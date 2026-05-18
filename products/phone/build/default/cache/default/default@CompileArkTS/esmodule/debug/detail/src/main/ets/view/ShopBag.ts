if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ShopBag_Params {
    currentBreakpoint?: string;
    isMoreDetail?: boolean;
    currentIndex?: number;
    PayCardButton?: () => void;
    scroller?: Scroller;
    context?: Context;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { LiveConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/LiveConstants";
import { ShopBagHeader } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ShopBagHeader";
import { ShopList } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ShopList";
export class ShopBag extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__isMoreDetail = new SynchedPropertySimpleTwoWayPU(params.isMoreDetail, this, "isMoreDetail");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.PayCardButton = this.payCardBuilder;
        this.scroller = new Scroller();
        this.context = this.getUIContext().getHostContext()!;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ShopBag_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.PayCardButton !== undefined) {
            this.PayCardButton = params.PayCardButton;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: ShopBag_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isMoreDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isMoreDetail.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
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
    private __isMoreDetail: SynchedPropertySimpleTwoWayPU<boolean>;
    get isMoreDetail() {
        return this.__isMoreDetail.get();
    }
    set isMoreDetail(newValue: boolean) {
        this.__isMoreDetail.set(newValue);
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    payCardBuilder(parent = null) { }
    private __PayCardButton;
    private scroller: Scroller;
    private context: Context;
    tabBuilder(title: string, targetIndex: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({
                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109688, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109687, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontColor(this.currentIndex === targetIndex ? { "id": 67109441, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109440, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontSize({ "id": 67109689, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109686, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
            });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ShopBagHeader(this, { isMoreDetail: this.__isMoreDetail }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ShopBag.ets", line: 50, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isMoreDetail: this.isMoreDetail
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ShopBagHeader" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.Start });
            Tabs.onChange((index) => {
                this.currentIndex = index;
            });
            Tabs.layoutWeight(1);
            Tabs.barWidth(CommonConstants.FULL_PERCENT);
            Tabs.barHeight({ "id": 67109685, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Tabs.barMode(BarMode.Scrollable, { margin: 0, nonScrollableLayoutStyle: LayoutStyle.ALWAYS_AVERAGE_SPLIT });
            Tabs.fadingEdge(false);
            Tabs.margin({
                bottom: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : CommonConstants.BOTTOM_RECT_HEIGHT
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    TabContent.create(() => {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Scroll.create(this.scroller);
                            Scroll.align(Alignment.Top);
                            Scroll.scrollBar(BarState.Off);
                            Scroll.height(CommonConstants.FULL_PERCENT);
                            Scroll.width(CommonConstants.FULL_PERCENT);
                        }, Scroll);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new ShopList(this, { PayCardButton: this.PayCardButton }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ShopBag.ets", line: 55, col: 15 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            PayCardButton: this.PayCardButton
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "ShopList" });
                        }
                        Scroll.pop();
                    });
                    TabContent.tabBar({ builder: () => {
                            this.tabBuilder.call(this, item, index);
                        } });
                }, TabContent);
                TabContent.pop();
            };
            this.forEachUpdateFunction(elmtId, LiveConstants.SHOP_CAR_TABS(this.context), forEachItemGenFunction, (item: string, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

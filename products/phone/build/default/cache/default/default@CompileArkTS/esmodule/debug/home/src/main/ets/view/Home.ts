if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Home_Params {
    currentBottomIndex?: number;
    currentBreakpoint?: string;
    topRectHeight?: number;
    context?: Context;
    tabList?: FooterTab[];
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { FooterTabViewModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/FooterTabViewModel";
import type { FooterTab } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/FooterTabViewModel";
import { HomeContent } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/HomeContent";
import { ClassifyContent } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/ClassifyContent";
import { ShoppingBagContent } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/ShoppingBagContent";
export class Home extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBottomIndex = new ObservedPropertySimplePU(0, this, "currentBottomIndex");
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.context = this.getUIContext().getHostContext()!;
        this.tabList = new FooterTabViewModel(this.context).getTabList();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Home_Params) {
        if (params.currentBottomIndex !== undefined) {
            this.currentBottomIndex = params.currentBottomIndex;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.tabList !== undefined) {
            this.tabList = params.tabList;
        }
    }
    updateStateVars(params: Home_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBottomIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBottomIndex.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBottomIndex: ObservedPropertySimplePU<number>;
    get currentBottomIndex() {
        return this.__currentBottomIndex.get();
    }
    set currentBottomIndex(newValue: number) {
        this.__currentBottomIndex.set(newValue);
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
    private tabList: FooterTab[];
    BottomTabBuilder(item: FooterTab, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({
                bottom: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : CommonConstants.BOTTOM_RECT_HEIGHT
            });
            Column.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109233, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                CommonConstants.FULL_PERCENT);
            Column.width(CommonConstants.FULL_PERCENT);
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(index !== this.currentBottomIndex ? item.getIcon() : item.getIconSelected());
            Image.width(ResourceUtil.getCommonImgSize()[0]);
            Image.height(ResourceUtil.getCommonImgSize()[0]);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.getName());
            Text.fontSize({ "id": 67109234, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.fontColor(index === this.currentBottomIndex ? { "id": 67109037, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : Color.Black);
            Text.margin({ top: { "id": 67109235, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Text.opacity(index === this.currentBottomIndex ? CommonConstants.TEXT_OPACITY[0] : CommonConstants.TEXT_OPACITY[1]);
        }, Text);
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? BarPosition.Start :
                    BarPosition.End });
            Tabs.barWidth(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109070, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                CommonConstants.FULL_PERCENT);
            Tabs.barHeight(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? CommonConstants.FULL_PERCENT :
                ((deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? CommonConstants.TAB_BAR_HEIGHT :
                    CommonConstants.TAB_BAR_HEIGHT + CommonConstants.BOTTOM_RECT_HEIGHT)));
            Tabs.barBackgroundColor({ "id": 67109036, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Tabs.barMode(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? BarMode.Scrollable : BarMode.Fixed, { nonScrollableLayoutStyle: LayoutStyle.ALWAYS_CENTER });
            Tabs.vertical(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG);
            Tabs.onChange((index: number) => {
                this.currentBottomIndex = index;
            });
            Tabs.scrollable(false);
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new HomeContent(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/Home.ets", line: 58, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "HomeContent" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.BottomTabBuilder.call(this, this.tabList[0], 0);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ClassifyContent(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/Home.ets", line: 63, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "ClassifyContent" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.BottomTabBuilder.call(this, this.tabList[1], 1);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.BottomTabBuilder.call(this, this.tabList[2], 2);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ShoppingBagContent(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/Home.ets", line: 72, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "ShoppingBagContent" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.BottomTabBuilder.call(this, this.tabList[3], 3);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.BottomTabBuilder.call(this, this.tabList[4], 4);
                } });
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

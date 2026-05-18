if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ClassifyContent_Params {
    currentBreakpoint?: string;
    pageInfo?: NavPathStack;
    currentClassifyIndex?: number;
    context?: Context;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, BreakpointType, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { ClassifyHeader } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/ClassifyHeader";
import { ClassifyConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/ClassifyConstants";
import { ClassifyNavDestination } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/ClassifyNavdestinationPhone";
export class ClassifyContent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__pageInfo = new ObservedPropertyObjectPU(new NavPathStack(), this, "pageInfo");
        this.addProvidedVar("pageInfo", this.__pageInfo, false);
        this.__currentClassifyIndex = new ObservedPropertySimplePU(0, this, "currentClassifyIndex");
        this.context = this.getUIContext().getHostContext()!;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ClassifyContent_Params) {
        if (params.pageInfo !== undefined) {
            this.pageInfo = params.pageInfo;
        }
        if (params.currentClassifyIndex !== undefined) {
            this.currentClassifyIndex = params.currentClassifyIndex;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: ClassifyContent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfo.purgeDependencyOnElmtId(rmElmtId);
        this.__currentClassifyIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__pageInfo.aboutToBeDeleted();
        this.__currentClassifyIndex.aboutToBeDeleted();
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
    private __pageInfo: ObservedPropertyObjectPU<NavPathStack>;
    get pageInfo() {
        return this.__pageInfo.get();
    }
    set pageInfo(newValue: NavPathStack) {
        this.__pageInfo.set(newValue);
    }
    private __currentClassifyIndex: ObservedPropertySimplePU<number>;
    get currentClassifyIndex() {
        return this.__currentClassifyIndex.get();
    }
    set currentClassifyIndex(newValue: number) {
        this.__currentClassifyIndex.set(newValue);
    }
    private context: Context;
    PageMap(name: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (name === ClassifyConstants.NAV_ROUTER_LIST(this.context)[0]) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new ClassifyNavDestination(this, { name: name }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/ClassifyContent.ets", line: 32, col: 7 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        name: name
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "ClassifyNavDestination" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        NavDestination.create(() => { }, { moduleName: "phone", pagePath: "features/home/src/main/ets/view/ClassifyContent" });
                        NavDestination.hideTitleBar(true);
                    }, NavDestination);
                    NavDestination.pop();
                });
            }
        }, If);
        If.pop();
    }
    aboutToAppear(): void {
        this.pageInfo.pushPath({ name: ClassifyConstants.NAV_ROUTER_LIST(this.context)[0] }, false);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109022, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109021, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.height(CommonConstants.FULL_PERCENT);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ClassifyHeader(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/ClassifyContent.ets", line: 45, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ClassifyHeader" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // [Start navigation_mode_split]
            Navigation.create(this.pageInfo, { moduleName: "phone", pagePath: "features/home/src/main/ets/view/ClassifyContent", isUserCreateStack: true });
            // [Start navigation_mode_split]
            Navigation.layoutWeight(1);
            // [Start navigation_mode_split]
            Navigation.mode(NavigationMode.Split);
            // [Start navigation_mode_split]
            Navigation.navBarWidth(new BreakpointType('96vp', '144vp', '200vp').getValue(this.currentBreakpoint));
            // [Start navigation_mode_split]
            Navigation.navBarWidthRange([new BreakpointType({ "id": 67109146, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109145, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109144, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" })
                    .getValue(this.currentBreakpoint), new BreakpointType({ "id": 67109146, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109145, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109144, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" })
                    .getValue(this.currentBreakpoint)]);
            // [Start navigation_mode_split]
            Navigation.hideToolBar(true);
            // [Start navigation_mode_split]
            Navigation.hideTitleBar(true);
            // [Start navigation_mode_split]
            Navigation.navDestination({ builder: this.PageMap.bind(this) });
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // [StartExclude navigation_mode_split]
            List.create();
            // [StartExclude navigation_mode_split]
            List.scrollBar(BarState.Off);
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
                            Stack.create({ alignContent: Alignment.Start });
                            Stack.width(CommonConstants.FULL_PERCENT);
                            Stack.height({ "id": 67109143, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Stack.margin({ bottom: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[1] && index ===
                                    ClassifyConstants.NAV_ROUTER_LIST.length - 1 ? CommonConstants.BOTTOM_RECT_HEIGHT : 0 });
                        }, Stack);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.width(CommonConstants.FULL_PERCENT);
                            Row.height(CommonConstants.FULL_PERCENT);
                            Row.justifyContent(FlexAlign.Start);
                            Row.padding({ left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint) });
                            Row.onClick(() => {
                                this.currentClassifyIndex = index;
                                if (this.pageInfo.size() !== 0) {
                                    this.pageInfo.pop();
                                }
                                this.pageInfo.pushPath({ name: item }, false);
                            });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.fontSize({ "id": 67109148, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Text.lineHeight({ "id": 67109149, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Text.fontWeight(FontWeight.Normal);
                            Text.fontColor(this.currentClassifyIndex === index ? { "id": 67109020, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109024, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                        }, Text);
                        Text.pop();
                        Row.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Divider.create();
                            Divider.vertical(true);
                            Divider.strokeWidth(ClassifyConstants.SWIPER_DIVIDER_WIDTH);
                            Divider.height({ "id": 67109149, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Divider.color({ "id": 67109023, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Divider.visibility(index === this.currentClassifyIndex ? Visibility.Visible : Visibility.None);
                        }, Divider);
                        Stack.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, ClassifyConstants.NAV_ROUTER_LIST(this.context), forEachItemGenFunction, (item: string, index: number) => item + index, true, true);
        }, ForEach);
        ForEach.pop();
        // [StartExclude navigation_mode_split]
        List.pop();
        // [Start navigation_mode_split]
        Navigation.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

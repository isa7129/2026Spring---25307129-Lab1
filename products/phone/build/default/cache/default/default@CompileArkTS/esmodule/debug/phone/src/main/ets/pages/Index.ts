if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    pageInfos?: NavPathStack;
    isSplitMode?: boolean;
    windowUtil?: WindowUtil;
    mainWindow?: window.Window;
}
import type window from "@ohos:window";
import { CommonConstants, Logger } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import type { WindowUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { DetailConstants, ProductHome } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/Index";
import { ProductMoreDetail } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/Index";
import { LiveHome } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/Index";
import { Home } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/Index";
import { ClassifyConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/Index";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__pageInfos = new ObservedPropertyObjectPU(new NavPathStack(), this, "pageInfos");
        this.addProvidedVar("pageInfos", this.__pageInfos, false);
        this.__isSplitMode = this.createStorageLink('isSplitMode', false, "isSplitMode");
        this.windowUtil = undefined;
        this.mainWindow = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.pageInfos !== undefined) {
            this.pageInfos = params.pageInfos;
        }
        if (params.windowUtil !== undefined) {
            this.windowUtil = params.windowUtil;
        }
        if (params.mainWindow !== undefined) {
            this.mainWindow = params.mainWindow;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
        this.__isSplitMode.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__pageInfos.aboutToBeDeleted();
        this.__isSplitMode.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __pageInfos: ObservedPropertyObjectPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    private __isSplitMode: ObservedPropertyAbstractPU<boolean>;
    get isSplitMode() {
        return this.__isSplitMode.get();
    }
    set isSplitMode(newValue: boolean) {
        this.__isSplitMode.set(newValue);
    }
    private windowUtil?: WindowUtil;
    private mainWindow?: window.Window;
    aboutToAppear(): void {
        if (this.isSplitMode) {
            this.pageInfos.pushPath({ name: ClassifyConstants.PAGE_INFO_LIST[2] });
        }
    }
    aboutToDisappear(): void {
        if (this.windowUtil === undefined) {
            return;
        }
        this.mainWindow = this.windowUtil.getMainWindow();
        if (this.mainWindow === undefined) {
            return;
        }
        try {
            this.mainWindow.off('windowSizeChange');
            if (canIUse('SystemCapability.Window.SessionManager')) {
                this.mainWindow.off('windowStatusChange');
            }
        }
        catch (exception) {
            Logger.error('Failed to unregister the window callback. Code: ' + JSON.stringify(exception));
        }
    }
    PageMap(name: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (name === ClassifyConstants.PAGE_INFO_LIST[0]) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new LiveHome(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/Index.ets", line: 59, col: 7 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "LiveHome" });
                    }
                });
            }
            else if (name === ClassifyConstants.PAGE_INFO_LIST[1]) {
                this.ifElseBranchUpdateFunction(1, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new ProductMoreDetail(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/Index.ets", line: 61, col: 7 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "ProductMoreDetail" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new ProductHome(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/Index.ets", line: 63, col: 7 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "ProductHome" });
                    }
                });
            }
        }, If);
        If.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(this.pageInfos, { moduleName: "phone", pagePath: "products/phone/src/main/ets/pages/Index", isUserCreateStack: true });
            Navigation.width(CommonConstants.FULL_PERCENT);
            Navigation.height(CommonConstants.FULL_PERCENT);
            Navigation.navDestination({ builder: this.PageMap.bind(this) });
            Navigation.mode(NavigationMode.Stack);
            Navigation.id(DetailConstants.NAVIGATION_ID);
            Navigation.hideTitleBar(true);
        }, Navigation);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Home(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/Index.ets", line: 69, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Home" });
        }
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.huawei.multishoppingpricecomparison", moduleName: "phone", pagePath: "pages/Index", pageFullPath: "products/phone/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });

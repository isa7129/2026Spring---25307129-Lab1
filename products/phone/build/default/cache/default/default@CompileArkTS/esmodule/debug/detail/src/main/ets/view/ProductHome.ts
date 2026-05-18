if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ProductHome_Params {
    currentBreakpoint?: string;
    topRectHeight?: number;
    windowWidth?: number;
    isShowingSidebar?: boolean;
    isSplitMode?: boolean;
    isMoreDetail?: boolean;
    isShoppingBag?: boolean;
    isCustomerService?: boolean;
    isDialogOpen?: boolean;
    detailType?: string;
    isLiveMoreDetail?: boolean;
    pageInfos?: NavPathStack;
    pipWindowUtil?: PipWindowUtil | undefined;
    is2in1?: boolean;
}
import deviceInfo from "@ohos:deviceInfo";
import AbilityConstant from "@ohos:app.ability.AbilityConstant";
import type common from "@ohos:app.ability.common";
import type StartOptions from "@ohos:app.ability.StartOptions";
import type Want from "@ohos:app.ability.Want";
import { BreakpointConstants, CommonConstants, PipWindowUtil, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { ProductInfo, ProductPicture } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ProductDetail";
import { ProductUtilView } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ProductUtilView";
import { DetailTopIcon } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/CommonView";
import { AllComments } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ProductConfig";
export class ProductHome extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.__windowWidth = this.createStorageLink('windowWidth', 0, "windowWidth");
        this.__isShowingSidebar = this.createStorageLink('isShowingSidebar', false, "isShowingSidebar");
        this.__isSplitMode = this.createStorageLink('isSplitMode', false, "isSplitMode");
        this.__isMoreDetail = new ObservedPropertySimplePU(false, this, "isMoreDetail");
        this.__isShoppingBag = new ObservedPropertySimplePU(false, this, "isShoppingBag");
        this.__isCustomerService = new ObservedPropertySimplePU(false, this, "isCustomerService");
        this.__isDialogOpen = new ObservedPropertySimplePU(false, this, "isDialogOpen");
        this.__detailType = new ObservedPropertySimplePU(CommonConstants.BIND_SHEET_PAGE_TYPES[3], this, "detailType");
        this.__isLiveMoreDetail = new ObservedPropertySimplePU(false, this, "isLiveMoreDetail");
        this.__pageInfos = this.initializeConsume('pageInfos', "pageInfos");
        this.pipWindowUtil = PipWindowUtil.getPipWindowUtil(this.getUIContext());
        this.is2in1 = deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ProductHome_Params) {
        if (params.isMoreDetail !== undefined) {
            this.isMoreDetail = params.isMoreDetail;
        }
        if (params.isShoppingBag !== undefined) {
            this.isShoppingBag = params.isShoppingBag;
        }
        if (params.isCustomerService !== undefined) {
            this.isCustomerService = params.isCustomerService;
        }
        if (params.isDialogOpen !== undefined) {
            this.isDialogOpen = params.isDialogOpen;
        }
        if (params.detailType !== undefined) {
            this.detailType = params.detailType;
        }
        if (params.isLiveMoreDetail !== undefined) {
            this.isLiveMoreDetail = params.isLiveMoreDetail;
        }
        if (params.pipWindowUtil !== undefined) {
            this.pipWindowUtil = params.pipWindowUtil;
        }
        if (params.is2in1 !== undefined) {
            this.is2in1 = params.is2in1;
        }
    }
    updateStateVars(params: ProductHome_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__windowWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowingSidebar.purgeDependencyOnElmtId(rmElmtId);
        this.__isSplitMode.purgeDependencyOnElmtId(rmElmtId);
        this.__isMoreDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__isShoppingBag.purgeDependencyOnElmtId(rmElmtId);
        this.__isCustomerService.purgeDependencyOnElmtId(rmElmtId);
        this.__isDialogOpen.purgeDependencyOnElmtId(rmElmtId);
        this.__detailType.purgeDependencyOnElmtId(rmElmtId);
        this.__isLiveMoreDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
        this.__windowWidth.aboutToBeDeleted();
        this.__isShowingSidebar.aboutToBeDeleted();
        this.__isSplitMode.aboutToBeDeleted();
        this.__isMoreDetail.aboutToBeDeleted();
        this.__isShoppingBag.aboutToBeDeleted();
        this.__isCustomerService.aboutToBeDeleted();
        this.__isDialogOpen.aboutToBeDeleted();
        this.__detailType.aboutToBeDeleted();
        this.__isLiveMoreDetail.aboutToBeDeleted();
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
    private __windowWidth: ObservedPropertyAbstractPU<number>;
    get windowWidth() {
        return this.__windowWidth.get();
    }
    set windowWidth(newValue: number) {
        this.__windowWidth.set(newValue);
    }
    private __isShowingSidebar: ObservedPropertyAbstractPU<boolean>;
    get isShowingSidebar() {
        return this.__isShowingSidebar.get();
    }
    set isShowingSidebar(newValue: boolean) {
        this.__isShowingSidebar.set(newValue);
    }
    private __isSplitMode: ObservedPropertyAbstractPU<boolean>;
    get isSplitMode() {
        return this.__isSplitMode.get();
    }
    set isSplitMode(newValue: boolean) {
        this.__isSplitMode.set(newValue);
    }
    private __isMoreDetail: ObservedPropertySimplePU<boolean>;
    get isMoreDetail() {
        return this.__isMoreDetail.get();
    }
    set isMoreDetail(newValue: boolean) {
        this.__isMoreDetail.set(newValue);
    }
    private __isShoppingBag: ObservedPropertySimplePU<boolean>;
    get isShoppingBag() {
        return this.__isShoppingBag.get();
    }
    set isShoppingBag(newValue: boolean) {
        this.__isShoppingBag.set(newValue);
    }
    private __isCustomerService: ObservedPropertySimplePU<boolean>;
    get isCustomerService() {
        return this.__isCustomerService.get();
    }
    set isCustomerService(newValue: boolean) {
        this.__isCustomerService.set(newValue);
    }
    private __isDialogOpen: ObservedPropertySimplePU<boolean>;
    get isDialogOpen() {
        return this.__isDialogOpen.get();
    }
    set isDialogOpen(newValue: boolean) {
        this.__isDialogOpen.set(newValue);
    }
    private __detailType: ObservedPropertySimplePU<string>;
    get detailType() {
        return this.__detailType.get();
    }
    set detailType(newValue: string) {
        this.__detailType.set(newValue);
    }
    private __isLiveMoreDetail: ObservedPropertySimplePU<boolean>;
    get isLiveMoreDetail() {
        return this.__isLiveMoreDetail.get();
    }
    set isLiveMoreDetail(newValue: boolean) {
        this.__isLiveMoreDetail.set(newValue);
    }
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    private pipWindowUtil: PipWindowUtil | undefined;
    public is2in1: boolean;
    aboutToDisappear(): void {
        if (deviceInfo.deviceType !== CommonConstants.DEVICE_TYPES[0]) {
            if (this.pipWindowUtil === undefined) {
                return;
            }
            this.pipWindowUtil.stopPip();
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // [Start product_side_bar_container]
                    SideBarContainer.create();
                    // [Start product_side_bar_container]
                    SideBarContainer.showSideBar(this.isShowingSidebar);
                    // [Start product_side_bar_container]
                    SideBarContainer.showControlButton(false);
                    // [Start product_side_bar_container]
                    SideBarContainer.sideBarPosition(SideBarPosition.End);
                    // [Start product_side_bar_container]
                    SideBarContainer.divider({
                        strokeWidth: '1vp',
                        color: ResourceUtil.getCommonDividerColor()
                    });
                    // [Start product_side_bar_container]
                    SideBarContainer.minSideBarWidth(this.getUIContext().px2vp(this.windowWidth) / 3);
                    // [Start product_side_bar_container]
                    SideBarContainer.maxSideBarWidth(this.getUIContext().px2vp(this.windowWidth) / 3);
                    // [Start product_side_bar_container]
                    SideBarContainer.autoHide(false);
                }, SideBarContainer);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.alignItems(HorizontalAlign.End);
                    Column.height('100%');
                    Column.padding({
                        top: deviceInfo.deviceType === '2in1' ? 0 : this.topRectHeight,
                        left: '32vp',
                        right: '32vp'
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 67109754, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Image.width(ResourceUtil.getCommonImgSize()[1]);
                    Image.height(ResourceUtil.getCommonImgSize()[1]);
                    Image.onClick(() => {
                        if (this.currentBreakpoint === 'lg') {
                            this.isShowingSidebar = false;
                        }
                    });
                    Image.margin({
                        top: { "id": 67109507, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                        bottom: { "id": 67109507, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                    });
                }, Image);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            // [EndExclude product_side_bar_container]
                            AllComments(this, {}, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductHome.ets", line: 69, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "AllComments" });
                }
                Column.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.alignItems(VerticalAlign.Top);
                    Row.height(CommonConstants.FULL_PERCENT);
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.layoutWeight(2);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    // [StartExclude product_side_bar_container]
                    if (this.currentBreakpoint !== 'lg') {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Column.create();
                                Column.padding({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight });
                                Column.height(CommonConstants.FULL_PERCENT);
                                Column.layoutWeight(1);
                            }, Column);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Scroll.create();
                                Scroll.scrollBar(BarState.Off);
                                Scroll.layoutWeight(1);
                            }, Scroll);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Column.create();
                            }, Column);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new ProductPicture(this, { pageBreakpoint: this.currentBreakpoint, isMoreLiveDetail: this.__isLiveMoreDetail }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductHome.ets", line: 85, col: 19 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                pageBreakpoint: this.currentBreakpoint,
                                                isMoreLiveDetail: this.isLiveMoreDetail
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            pageBreakpoint: this.currentBreakpoint
                                        });
                                    }
                                }, { name: "ProductPicture" });
                            }
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new ProductInfo(this, { pageBreakpoint: this.currentBreakpoint }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductHome.ets", line: 86, col: 19 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                pageBreakpoint: this.currentBreakpoint
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            pageBreakpoint: this.currentBreakpoint
                                        });
                                    }
                                }, { name: "ProductInfo" });
                            }
                            Column.pop();
                            Scroll.pop();
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new ProductUtilView(this, { isMoreDetail: this.__isMoreDetail, isShoppingBag: this.__isShoppingBag, isCustomerService: this.__isCustomerService }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductHome.ets", line: 92, col: 15 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                isMoreDetail: this.isMoreDetail,
                                                isShoppingBag: this.isShoppingBag,
                                                isCustomerService: this.isCustomerService
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "ProductUtilView" });
                            }
                            Column.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Column.create();
                                Column.padding({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight });
                                Column.height(CommonConstants.FULL_PERCENT);
                                Column.layoutWeight(1);
                            }, Column);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new ProductPicture(this, { pageBreakpoint: this.currentBreakpoint, isMoreLiveDetail: this.__isLiveMoreDetail }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductHome.ets", line: 100, col: 15 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                pageBreakpoint: this.currentBreakpoint,
                                                isMoreLiveDetail: this.isLiveMoreDetail
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            pageBreakpoint: this.currentBreakpoint
                                        });
                                    }
                                }, { name: "ProductPicture" });
                            }
                            Column.pop();
                        });
                    }
                }, If);
                If.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Column.create();
                                Column.padding({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight });
                                Column.backgroundColor({ "id": 67109433, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                                Column.height(CommonConstants.FULL_PERCENT);
                                Column.layoutWeight(1);
                                Column.justifyContent(FlexAlign.Start);
                            }, Column);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create({ space: { "id": 67109508, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                                Row.padding({
                                    left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                                    right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
                                });
                                Row.justifyContent(FlexAlign.End);
                                Row.width(CommonConstants.FULL_PERCENT);
                                Row.margin({
                                    top: { "id": 67109507, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                    bottom: { "id": 67109507, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                                });
                            }, Row);
                            DetailTopIcon.bind(this)({ "id": 67109737, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, () => {
                                if (this.is2in1) {
                                    return;
                                }
                                if (!this.isSplitMode) {
                                    let want: Want = {
                                        bundleName: 'com.huawei.multishoppingpricecomparison',
                                        abilityName: 'SecondAbility'
                                    };
                                    let option: StartOptions = { windowMode: AbilityConstant.WindowMode.WINDOW_MODE_SPLIT_PRIMARY };
                                    (this.getUIContext().getHostContext() as common.UIAbilityContext).startAbility(want, option);
                                }
                                else {
                                    (this.getUIContext().getHostContext() as common.UIAbilityContext).terminateSelf();
                                }
                            });
                            DetailTopIcon.bind(this)({ "id": 67109738, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Row.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Scroll.create();
                                Scroll.align(Alignment.Top);
                                Scroll.scrollBar(BarState.Off);
                                Scroll.layoutWeight(1);
                            }, Scroll);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new ProductInfo(this, { pageBreakpoint: BreakpointConstants.BREAKPOINT_LG }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductHome.ets", line: 139, col: 17 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                pageBreakpoint: BreakpointConstants.BREAKPOINT_LG
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            pageBreakpoint: BreakpointConstants.BREAKPOINT_LG
                                        });
                                    }
                                }, { name: "ProductInfo" });
                            }
                            Scroll.pop();
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new ProductUtilView(this, { isMoreDetail: this.__isMoreDetail, isShoppingBag: this.__isShoppingBag, isCustomerService: this.__isCustomerService }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductHome.ets", line: 145, col: 15 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                isMoreDetail: this.isMoreDetail,
                                                isShoppingBag: this.isShoppingBag,
                                                isCustomerService: this.isCustomerService
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "ProductUtilView" });
                            }
                            Column.pop();
                        });
                    }
                    // [EndExclude product_side_bar_container]
                    else // [StartExclude product_side_bar_container]
                     {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                Row.pop();
                // [Start product_side_bar_container]
                SideBarContainer.pop();
            }, { moduleName: "phone", pagePath: "features/detail/src/main/ets/view/ProductHome" });
            NavDestination.hideTitleBar(true);
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

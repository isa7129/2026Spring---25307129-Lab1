if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ProductMoreDetail_Params {
    currentBreakpoint?: string;
    topRectHeight?: number;
    isMoreDetail?: boolean;
    isShoppingBag?: boolean;
    isCustomerService?: boolean;
    isLiveMoreDetail?: boolean;
    pageInfos?: NavPathStack;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, BreakpointType, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { ClassifyConstants, DetailShoppingBagView } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/Index";
import { CustomerServiceView } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/CustomerServiceView";
import { ProductInfo, ProductPicture } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ProductDetail";
import { ProductUtilView } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ProductUtilView";
import { DetailConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/DetailConstants";
export class ProductMoreDetail extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.__isMoreDetail = new ObservedPropertySimplePU(true, this, "isMoreDetail");
        this.__isShoppingBag = new ObservedPropertySimplePU(false, this, "isShoppingBag");
        this.__isCustomerService = new ObservedPropertySimplePU(false, this, "isCustomerService");
        this.__isLiveMoreDetail = new ObservedPropertySimplePU(false, this, "isLiveMoreDetail");
        this.__pageInfos = this.initializeConsume('pageInfos', "pageInfos");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ProductMoreDetail_Params) {
        if (params.isMoreDetail !== undefined) {
            this.isMoreDetail = params.isMoreDetail;
        }
        if (params.isShoppingBag !== undefined) {
            this.isShoppingBag = params.isShoppingBag;
        }
        if (params.isCustomerService !== undefined) {
            this.isCustomerService = params.isCustomerService;
        }
        if (params.isLiveMoreDetail !== undefined) {
            this.isLiveMoreDetail = params.isLiveMoreDetail;
        }
    }
    updateStateVars(params: ProductMoreDetail_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__isMoreDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__isShoppingBag.purgeDependencyOnElmtId(rmElmtId);
        this.__isCustomerService.purgeDependencyOnElmtId(rmElmtId);
        this.__isLiveMoreDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
        this.__isMoreDetail.aboutToBeDeleted();
        this.__isShoppingBag.aboutToBeDeleted();
        this.__isCustomerService.aboutToBeDeleted();
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
    aboutToAppear(): void {
        let navParams: string = JSON.stringify(this.pageInfos.getParamByName(ClassifyConstants.PAGE_INFO_LIST[1]));
        if (navParams.includes(DetailConstants.PARAM_STRING_LIST[0])) {
            this.isShoppingBag = true;
        }
        if (navParams.includes(DetailConstants.PARAM_STRING_LIST[1])) {
            this.isCustomerService = true;
        }
    }
    aboutToDisappear(): void {
        this.isShoppingBag = false;
        this.isCustomerService = false;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // [Start product_more_detail_view]
                    Row.create();
                    // [Start product_more_detail_view]
                    Row.height(CommonConstants.FULL_PERCENT);
                    // [Start product_more_detail_view]
                    Row.width(CommonConstants.FULL_PERCENT);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.height('100%');
                    Column.layoutWeight(new BreakpointType(0, 3, 5).getValue(this.currentBreakpoint));
                    Column.borderWidth({ right: '1vp' });
                    Column.borderColor(ResourceUtil.getCommonBorderColor()[0]);
                    Column.visibility(this.currentBreakpoint === 'sm' ? Visibility.None : Visibility.Visible);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // [StartExclude product_more_detail_view]
                    Scroll.create();
                    // [StartExclude product_more_detail_view]
                    Scroll.scrollBar(BarState.Off);
                    // [StartExclude product_more_detail_view]
                    Scroll.layoutWeight(1);
                }, Scroll);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.margin({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight });
                }, Column);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ProductPicture(this, {
                                pageBreakpoint: new BreakpointType(BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_MD).getValue(this.currentBreakpoint),
                                isMoreLiveDetail: this.__isLiveMoreDetail
                            }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductMoreDetail.ets", line: 57, col: 15 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    pageBreakpoint: new BreakpointType(BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_MD).getValue(this.currentBreakpoint),
                                    isMoreLiveDetail: this.isLiveMoreDetail
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                pageBreakpoint: new BreakpointType(BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_MD).getValue(this.currentBreakpoint)
                            });
                        }
                    }, { name: "ProductPicture" });
                }
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ProductInfo(this, {
                                pageBreakpoint: new BreakpointType(BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_MD).getValue(this.currentBreakpoint)
                            }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductMoreDetail.ets", line: 62, col: 15 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    pageBreakpoint: new BreakpointType(BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_MD).getValue(this.currentBreakpoint)
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                pageBreakpoint: new BreakpointType(BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_MD).getValue(this.currentBreakpoint)
                            });
                        }
                    }, { name: "ProductInfo" });
                }
                Column.pop();
                // [StartExclude product_more_detail_view]
                Scroll.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ProductUtilView(this, { isMoreDetail: this.__isMoreDetail, isShoppingBag: this.__isShoppingBag, isCustomerService: this.__isCustomerService }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductMoreDetail.ets", line: 72, col: 11 });
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
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.backgroundColor(ResourceUtil.getCommonBackgroundColor()[0]);
                    Column.height(CommonConstants.FULL_PERCENT);
                    Column.layoutWeight(3);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    // Check the auxiliary information page of the side panel.
                    if (this.isShoppingBag) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new DetailShoppingBagView(this, { isMoreDetail: this.isMoreDetail }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductMoreDetail.ets", line: 87, col: 13 });
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
                                }, { name: "DetailShoppingBagView" });
                            }
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.isCustomerService) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new CustomerServiceView(this, {}, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductMoreDetail.ets", line: 90, col: 13 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {};
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "CustomerServiceView" });
                            }
                        });
                    }
                    else // [StartExclude product_more_detail_view_2]
                     {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                Column.pop();
                // [Start product_more_detail_view]
                Row.pop();
            }, { moduleName: "phone", pagePath: "features/detail/src/main/ets/view/ProductMoreDetail" });
            NavDestination.hideTitleBar(true);
            NavDestination.expandSafeArea([SafeAreaType.KEYBOARD]);
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

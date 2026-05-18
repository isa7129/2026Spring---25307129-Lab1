if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface LiveHome_Params {
    currentBreakpoint?: string;
    topRectHeight?: number;
    isMoreDetail?: boolean;
    detailType?: string;
    isBindSheetOpen?: boolean;
    utilMoreDetail?: boolean;
    utilShoppingBag?: boolean;
    utilCustomerService?: boolean;
    pageInfos?: NavPathStack;
    context?: Context;
    onFoldStatusChange?: Callback<display.FoldStatus>;
}
import display from "@ohos:display";
import window from "@ohos:window";
import type { Callback } from "@ohos:base";
import deviceInfo from "@ohos:deviceInfo";
import type { BusinessError } from "@ohos:base";
import { BreakpointConstants, BreakpointType, CommonConstants, Logger, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { Live } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/Live";
import { ShopBag } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ShopBag";
import { LiveConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/LiveConstants";
import { PayCard } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/PayCard";
import { ProductUtilView } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ProductUtilView";
import { ProductInfo, ProductPicture } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ProductDetail";
export class LiveHome extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.__isMoreDetail = new ObservedPropertySimplePU(false, this, "isMoreDetail");
        this.__detailType = new ObservedPropertySimplePU(CommonConstants.BIND_SHEET_PAGE_TYPES[0], this, "detailType");
        this.__isBindSheetOpen = new ObservedPropertySimplePU(false, this, "isBindSheetOpen");
        this.__utilMoreDetail = new ObservedPropertySimplePU(true, this, "utilMoreDetail");
        this.__utilShoppingBag = new ObservedPropertySimplePU(false, this, "utilShoppingBag");
        this.__utilCustomerService = new ObservedPropertySimplePU(false, this, "utilCustomerService");
        this.__pageInfos = this.initializeConsume('pageInfos', "pageInfos");
        this.context = this.getUIContext().getHostContext()!;
        this.onFoldStatusChange = (data: display.FoldStatus) => {
            if (canIUse('SystemCapability.Window.SessionManager')) {
                if (data === display.FoldStatus.FOLD_STATUS_FOLDED &&
                    this.detailType === CommonConstants.BIND_SHEET_PAGE_TYPES[2]) {
                    this.isMoreDetail = false;
                }
            }
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LiveHome_Params) {
        if (params.isMoreDetail !== undefined) {
            this.isMoreDetail = params.isMoreDetail;
        }
        if (params.detailType !== undefined) {
            this.detailType = params.detailType;
        }
        if (params.isBindSheetOpen !== undefined) {
            this.isBindSheetOpen = params.isBindSheetOpen;
        }
        if (params.utilMoreDetail !== undefined) {
            this.utilMoreDetail = params.utilMoreDetail;
        }
        if (params.utilShoppingBag !== undefined) {
            this.utilShoppingBag = params.utilShoppingBag;
        }
        if (params.utilCustomerService !== undefined) {
            this.utilCustomerService = params.utilCustomerService;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.onFoldStatusChange !== undefined) {
            this.onFoldStatusChange = params.onFoldStatusChange;
        }
    }
    updateStateVars(params: LiveHome_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__isMoreDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__detailType.purgeDependencyOnElmtId(rmElmtId);
        this.__isBindSheetOpen.purgeDependencyOnElmtId(rmElmtId);
        this.__utilMoreDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__utilShoppingBag.purgeDependencyOnElmtId(rmElmtId);
        this.__utilCustomerService.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
        this.__isMoreDetail.aboutToBeDeleted();
        this.__detailType.aboutToBeDeleted();
        this.__isBindSheetOpen.aboutToBeDeleted();
        this.__utilMoreDetail.aboutToBeDeleted();
        this.__utilShoppingBag.aboutToBeDeleted();
        this.__utilCustomerService.aboutToBeDeleted();
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
    private __detailType: ObservedPropertySimplePU<string>;
    get detailType() {
        return this.__detailType.get();
    }
    set detailType(newValue: string) {
        this.__detailType.set(newValue);
    }
    private __isBindSheetOpen: ObservedPropertySimplePU<boolean>;
    get isBindSheetOpen() {
        return this.__isBindSheetOpen.get();
    }
    set isBindSheetOpen(newValue: boolean) {
        this.__isBindSheetOpen.set(newValue);
    }
    private __utilMoreDetail: ObservedPropertySimplePU<boolean>;
    get utilMoreDetail() {
        return this.__utilMoreDetail.get();
    }
    set utilMoreDetail(newValue: boolean) {
        this.__utilMoreDetail.set(newValue);
    }
    private __utilShoppingBag: ObservedPropertySimplePU<boolean>;
    get utilShoppingBag() {
        return this.__utilShoppingBag.get();
    }
    set utilShoppingBag(newValue: boolean) {
        this.__utilShoppingBag.set(newValue);
    }
    private __utilCustomerService: ObservedPropertySimplePU<boolean>;
    get utilCustomerService() {
        return this.__utilCustomerService.get();
    }
    set utilCustomerService(newValue: boolean) {
        this.__utilCustomerService.set(newValue);
    }
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    private context: Context;
    private onFoldStatusChange: Callback<display.FoldStatus>;
    aboutToAppear(): void {
        if (canIUse('SystemCapability.Window.SessionManager')) {
            try {
                display.on('foldStatusChange', this.onFoldStatusChange);
            }
            catch (exception) {
                Logger.error('Failed to register the fold status callback. Code: ' + JSON.stringify(exception));
            }
        }
    }
    aboutToDisappear(): void {
        if (canIUse('SystemCapability.Window.SessionManager')) {
            try {
                display.off('foldStatusChange');
            }
            catch (exception) {
                Logger.error('Failed to unregister the fold status callback. Code: ' + JSON.stringify(exception));
            }
        }
    }
    ShopBagBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({
                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? (this.detailType ===
                    CommonConstants.BIND_SHEET_PAGE_TYPES[0] ? { "id": 67109521, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109522, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }) : 0
            });
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(CommonConstants.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.visibility(this.detailType === CommonConstants.BIND_SHEET_PAGE_TYPES[0] ? Visibility.Visible : Visibility.None);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ShopBag(this, {
                        isMoreDetail: this.__isMoreDetail,
                        PayCardButton: (): void => {
                            this.PayCardButton();
                        }
                    }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/LiveHome.ets", line: 70, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isMoreDetail: this.isMoreDetail,
                            PayCardButton: (): void => {
                                this.PayCardButton();
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ShopBag" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.visibility(this.detailType === CommonConstants.BIND_SHEET_PAGE_TYPES[1] ? Visibility.Visible : Visibility.None);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PayCard(this, {
                        isOpen: this.__isBindSheetOpen,
                        detailType: this.__detailType,
                        currentBreakpoint: this.currentBreakpoint
                    }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/LiveHome.ets", line: 78, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isOpen: this.isBindSheetOpen,
                            detailType: this.detailType,
                            currentBreakpoint: this.currentBreakpoint
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        currentBreakpoint: this.currentBreakpoint
                    });
                }
            }, { name: "PayCard" });
        }
        __Common__.pop();
        Column.pop();
    }
    shopCarButton(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109750, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.width(ResourceUtil.getCommonImgSize()[10]);
            Image.height(ResourceUtil.getCommonImgSize()[10]);
            Image.onClick(() => {
                this.isMoreDetail = true;
                this.detailType = CommonConstants.BIND_SHEET_PAGE_TYPES[0];
            });
            Image.bindSheet((this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM && this.isMoreDetail), { builder: () => {
                    this.ShopBagBuilder.call(this);
                } }, {
                detents: [{ "id": 67109520, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, LiveConstants.NINETY_PERCENT],
                onDisappear: () => {
                    this.isMoreDetail = false;
                },
                showClose: false,
                backgroundColor: ResourceUtil.getCommonBackgroundColor()[0],
                dragBar: false
            });
        }, Image);
    }
    PayCardButton(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(LiveConstants.PAY_BUTTON_TEXT(this.context));
            Text.width({ "id": 67109558, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.height({ "id": 67109529, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.border({ radius: ResourceUtil.getCommonBorderRadius()[5] });
            Text.fontSize({ "id": 67109554, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.backgroundColor({ "id": 67109427, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.textAlign(TextAlign.Center);
            Text.displayPriority(3);
            Text.onClick(() => {
                this.detailType = CommonConstants.BIND_SHEET_PAGE_TYPES[1];
            });
        }, Text);
        Text.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.height(CommonConstants.FULL_PERCENT);
                    Row.width(CommonConstants.FULL_PERCENT);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.layoutWeight(5);
                }, Column);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Live(this, {
                                shopCarButton: (): void => {
                                    this.shopCarButton();
                                },
                                currentBreakpoint: this.isMoreDetail ? new BreakpointType(BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_MD).getValue(this.currentBreakpoint) :
                                    this.currentBreakpoint,
                                detailType: this.__detailType,
                                isMoreDetail: this.__isMoreDetail
                            }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/LiveHome.ets", line: 135, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    shopCarButton: (): void => {
                                        this.shopCarButton();
                                    },
                                    currentBreakpoint: this.isMoreDetail ? new BreakpointType(BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_MD).getValue(this.currentBreakpoint) :
                                        this.currentBreakpoint,
                                    detailType: this.detailType,
                                    isMoreDetail: this.isMoreDetail
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                currentBreakpoint: this.isMoreDetail ? new BreakpointType(BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_SM, BreakpointConstants.BREAKPOINT_MD).getValue(this.currentBreakpoint) :
                                    this.currentBreakpoint
                            });
                        }
                    }, { name: "Live" });
                }
                Column.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.visibility(this.isMoreDetail && this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM ?
                        Visibility.Visible : Visibility.None);
                    Column.backgroundColor('#FFFFFF');
                    Column.height(CommonConstants.FULL_PERCENT);
                    Column.layoutWeight(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? 3 : 5);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.visibility(this.detailType === CommonConstants.BIND_SHEET_PAGE_TYPES[0] ? Visibility.Visible :
                        Visibility.None);
                    __Common__.margin({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight });
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ShopBag(this, {
                                isMoreDetail: this.__isMoreDetail,
                                PayCardButton: (): void => {
                                    this.PayCardButton();
                                }
                            }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/LiveHome.ets", line: 149, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    isMoreDetail: this.isMoreDetail,
                                    PayCardButton: (): void => {
                                        this.PayCardButton();
                                    }
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "ShopBag" });
                }
                __Common__.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.visibility(this.detailType === CommonConstants.BIND_SHEET_PAGE_TYPES[1] ? Visibility.Visible :
                        Visibility.None);
                    __Common__.margin({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight });
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new PayCard(this, {
                                isOpen: this.__isBindSheetOpen,
                                detailType: this.__detailType,
                                currentBreakpoint: this.currentBreakpoint
                            }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/LiveHome.ets", line: 159, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    isOpen: this.isBindSheetOpen,
                                    detailType: this.detailType,
                                    currentBreakpoint: this.currentBreakpoint
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                currentBreakpoint: this.currentBreakpoint
                            });
                        }
                    }, { name: "PayCard" });
                }
                __Common__.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.height(CommonConstants.FULL_PERCENT);
                    Column.width(CommonConstants.FULL_PERCENT);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Scroll.create();
                    Scroll.scrollBar(BarState.Off);
                    Scroll.layoutWeight(1);
                    Scroll.width(CommonConstants.FULL_PERCENT);
                    Scroll.visibility(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM && this.detailType ===
                        CommonConstants.BIND_SHEET_PAGE_TYPES[2] ? Visibility.Visible : Visibility.None);
                    Scroll.padding({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight });
                }, Scroll);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.padding({
                        bottom: deviceInfo.deviceType !== CommonConstants.DEVICE_TYPES[0] ?
                            CommonConstants.BOTTOM_RECT_HEIGHT : 0
                    });
                }, Column);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ProductPicture(this, { pageBreakpoint: BreakpointConstants.BREAKPOINT_SM, isMoreLiveDetail: this.__isMoreDetail }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/LiveHome.ets", line: 172, col: 17 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    pageBreakpoint: BreakpointConstants.BREAKPOINT_SM,
                                    isMoreLiveDetail: this.isMoreDetail
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                pageBreakpoint: BreakpointConstants.BREAKPOINT_SM
                            });
                        }
                    }, { name: "ProductPicture" });
                }
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ProductInfo(this, { pageBreakpoint: BreakpointConstants.BREAKPOINT_SM }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/LiveHome.ets", line: 173, col: 17 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    pageBreakpoint: BreakpointConstants.BREAKPOINT_SM
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                pageBreakpoint: BreakpointConstants.BREAKPOINT_SM
                            });
                        }
                    }, { name: "ProductInfo" });
                }
                Column.pop();
                Scroll.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ProductUtilView(this, {
                                isMoreDetail: this.__utilMoreDetail,
                                isShoppingBag: this.__utilShoppingBag,
                                isCustomerService: this.__utilCustomerService,
                                isLivePage: true
                            }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/LiveHome.ets", line: 187, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    isMoreDetail: this.utilMoreDetail,
                                    isShoppingBag: this.utilShoppingBag,
                                    isCustomerService: this.utilCustomerService,
                                    isLivePage: true
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
                Column.pop();
                Row.pop();
            }, { moduleName: "phone", pagePath: "features/detail/src/main/ets/view/LiveHome" });
            NavDestination.hideTitleBar(true);
            NavDestination.expandSafeArea([SafeAreaType.KEYBOARD]);
            NavDestination.onShown(() => {
                window.getLastWindow(this.context).then((topWindow) => {
                    topWindow.setWindowSystemBarProperties({
                        statusBarContentColor: '#FFFFFF'
                    }).catch((err: BusinessError) => {
                        Logger.error(`Failed to setWindowSystemBarProperties. Cause: ${err.code}, message: ${err.message}`);
                    });
                }).catch((err: BusinessError) => {
                    Logger.error(`Failed to getLastWindow. Cause: ${err.code}, message: ${err.message}`);
                });
            });
            NavDestination.onHidden(() => {
                window.getLastWindow(this.context).then((topWindow) => {
                    topWindow.setWindowSystemBarProperties({
                        statusBarContentColor: '#000000'
                    }).catch((err: BusinessError) => {
                        Logger.error(`Failed to setWindowSystemBarProperties. Cause: ${err.code}, message: ${err.message}`);
                    });
                }).catch((err: BusinessError) => {
                    Logger.error(`Failed to getLastWindow. Cause: ${err.code}, message: ${err.message}`);
                });
            });
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

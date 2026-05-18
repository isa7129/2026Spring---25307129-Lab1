if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ProductUtilView_Params {
    currentBreakpoint?: string;
    isShowingSidebar?: boolean;
    isSplitMode?: boolean;
    isMoreDetail?: boolean;
    isShoppingBag?: boolean;
    isCustomerService?: boolean;
    isDialogOpen?: boolean;
    detailType?: string;
    pageInfos?: NavPathStack;
    isLivePage?: boolean;
    context?: Context;
}
import deviceInfo from "@ohos:deviceInfo";
import { ClassifyConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/Index";
import { BreakpointConstants, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { DetailConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/DetailConstants";
import { PayCard } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/PayCard";
import { UtilIcon } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/CommonView";
export class ProductUtilView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__isShowingSidebar = this.createStorageLink('isShowingSidebar', false, "isShowingSidebar");
        this.__isSplitMode = this.createStorageLink('isSplitMode', false, "isSplitMode");
        this.__isMoreDetail = new SynchedPropertySimpleTwoWayPU(params.isMoreDetail, this, "isMoreDetail");
        this.__isShoppingBag = new SynchedPropertySimpleTwoWayPU(params.isShoppingBag, this, "isShoppingBag");
        this.__isCustomerService = new SynchedPropertySimpleTwoWayPU(params.isCustomerService, this, "isCustomerService");
        this.__isDialogOpen = new ObservedPropertySimplePU(false, this, "isDialogOpen");
        this.__detailType = new ObservedPropertySimplePU(CommonConstants.BIND_SHEET_PAGE_TYPES[3], this, "detailType");
        this.__pageInfos = this.initializeConsume('pageInfos', "pageInfos");
        this.isLivePage = false;
        this.context = this.getUIContext().getHostContext()!;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ProductUtilView_Params) {
        if (params.isDialogOpen !== undefined) {
            this.isDialogOpen = params.isDialogOpen;
        }
        if (params.detailType !== undefined) {
            this.detailType = params.detailType;
        }
        if (params.isLivePage !== undefined) {
            this.isLivePage = params.isLivePage;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: ProductUtilView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowingSidebar.purgeDependencyOnElmtId(rmElmtId);
        this.__isSplitMode.purgeDependencyOnElmtId(rmElmtId);
        this.__isMoreDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__isShoppingBag.purgeDependencyOnElmtId(rmElmtId);
        this.__isCustomerService.purgeDependencyOnElmtId(rmElmtId);
        this.__isDialogOpen.purgeDependencyOnElmtId(rmElmtId);
        this.__detailType.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isShowingSidebar.aboutToBeDeleted();
        this.__isSplitMode.aboutToBeDeleted();
        this.__isMoreDetail.aboutToBeDeleted();
        this.__isShoppingBag.aboutToBeDeleted();
        this.__isCustomerService.aboutToBeDeleted();
        this.__isDialogOpen.aboutToBeDeleted();
        this.__detailType.aboutToBeDeleted();
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
    private __isMoreDetail: SynchedPropertySimpleTwoWayPU<boolean>;
    get isMoreDetail() {
        return this.__isMoreDetail.get();
    }
    set isMoreDetail(newValue: boolean) {
        this.__isMoreDetail.set(newValue);
    }
    private __isShoppingBag: SynchedPropertySimpleTwoWayPU<boolean>;
    get isShoppingBag() {
        return this.__isShoppingBag.get();
    }
    set isShoppingBag(newValue: boolean) {
        this.__isShoppingBag.set(newValue);
    }
    private __isCustomerService: SynchedPropertySimpleTwoWayPU<boolean>;
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
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    public isLivePage: boolean;
    private context: Context;
    // [Start pay_card_builder]
    PayCardBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({ top: { "id": 67109730, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(CommonConstants.FULL_PERCENT);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PayCard(this, {
                        // [StartExclude pay_card_builder]
                        isOpen: this.__isDialogOpen,
                        detailType: this.__detailType,
                        currentBreakpoint: this.currentBreakpoint
                        // [EndExclude pay_card_builder]
                    }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductUtilView.ets", line: 41, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            // [StartExclude pay_card_builder]
                            isOpen: this.isDialogOpen,
                            detailType: this.detailType,
                            currentBreakpoint: this.currentBreakpoint
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        currentBreakpoint: this.currentBreakpoint
                        // [EndExclude pay_card_builder]
                    });
                }
            }, { name: "PayCard" });
        }
        Column.pop();
    }
    // [End pay_card_builder]
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: BreakpointConstants.GRID_ROW_COLUMNS[0],
                    md: BreakpointConstants.GRID_ROW_COLUMNS[1],
                    lg: BreakpointConstants.GRID_ROW_COLUMNS[2]
                }
            });
            GridRow.onBreakpointChange(() => {
                this.isDialogOpen = false;
            });
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: BreakpointConstants.GRID_COLUMN_SPANS[2],
                    md: BreakpointConstants.GRID_COLUMN_SPANS[3],
                    lg: BreakpointConstants.GRID_COLUMN_SPANS[4]
                }
            });
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.backgroundColor({ "id": 67109433, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.height(deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? CommonConstants.TAB_BAR_HEIGHT :
                CommonConstants.TAB_BAR_HEIGHT + CommonConstants.BOTTOM_RECT_HEIGHT);
            Row.width(CommonConstants.FULL_PERCENT);
            Row.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                bottom: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : CommonConstants.BOTTOM_RECT_HEIGHT
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.displayPriority(3);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new UtilIcon(this, { isMoreDetail: this.__isMoreDetail, iconImg: { "id": 67109329, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductUtilView.ets", line: 72, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isMoreDetail: this.isMoreDetail,
                            iconImg: { "id": 67109329, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "UtilIcon" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.displayPriority(3);
            __Common__.onClick(() => {
                this.isShowingSidebar = false;
                if (this.isMoreDetail) {
                    this.isCustomerService = true;
                    this.isShoppingBag = false;
                }
                else {
                    this.pageInfos.pushPathByName(ClassifyConstants.PAGE_INFO_LIST[1], new NavParams(DetailConstants.PARAM_STRING_LIST[1]));
                }
            });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new UtilIcon(this, { isMoreDetail: this.__isMoreDetail, iconImg: { "id": 67109306, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductUtilView.ets", line: 74, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isMoreDetail: this.isMoreDetail,
                            iconImg: { "id": 67109306, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "UtilIcon" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.displayPriority(3);
            __Common__.onClick(() => {
                this.isShowingSidebar = false;
                if (this.isMoreDetail) {
                    this.isShoppingBag = true;
                    this.isCustomerService = false;
                }
                else {
                    this.pageInfos.pushPathByName(ClassifyConstants.PAGE_INFO_LIST[1], new NavParams(DetailConstants.PARAM_STRING_LIST[0]));
                }
            });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new UtilIcon(this, { isMoreDetail: this.__isMoreDetail, iconImg: { "id": 67109333, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductUtilView.ets", line: 86, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isMoreDetail: this.isMoreDetail,
                            iconImg: { "id": 67109333, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "UtilIcon" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.displayPriority(1);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(DetailConstants.BUTTON_NAMES(this.context)[0]);
            Button.fontSize({ "id": 67109721, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Button.fontColor({ "id": 67109447, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Button.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Button.layoutWeight(this.isMoreDetail ? (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? 1.2 : 2) :
                (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? 2 : 1));
            Button.height({ "id": 67109722, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Button.borderRadius(ResourceUtil.getCommonBorderRadius()[7]);
            Button.backgroundColor({ "id": 67109446, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Button.margin({ right: { "id": 67109723, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Button.displayPriority(2);
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // [Start dialog_btn]
            Button.createWithLabel(DetailConstants.BUTTON_NAMES(this.context)[1]);
            // [Start dialog_btn]
            Button.fontSize('16fp');
            // [Start dialog_btn]
            Button.fontColor(Color.White);
            // [Start dialog_btn]
            Button.fontWeight(500);
            // [Start dialog_btn]
            Button.layoutWeight(1);
            // [Start dialog_btn]
            Button.height('40vp');
            // [Start dialog_btn]
            Button.borderRadius(ResourceUtil.getCommonBorderRadius()[7]);
            // [Start dialog_btn]
            Button.backgroundColor('#CF0A2C');
            // [Start dialog_btn]
            Button.displayPriority(4);
            // [Start dialog_btn]
            Button.bindSheet({ value: this.isDialogOpen, changeEvent: newValue => { this.isDialogOpen = newValue; } }, { builder: () => {
                    this.PayCardBuilder.call(this);
                } }, {
                height: '620vp',
                preferType: SheetType.CENTER,
                dragBar: false,
                enableOutsideInteractive: false,
                onDisappear: () => { this.isDialogOpen = false; },
                showClose: false,
                backgroundColor: '#F1F3F5'
            });
            // [Start dialog_btn]
            Button.onClick(() => {
                if (this.isLivePage || this.isSplitMode) {
                    return;
                }
                this.isDialogOpen = true;
            });
        }, Button);
        // [Start dialog_btn]
        Button.pop();
        Row.pop();
        GridCol.pop();
        GridRow.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
// [End pay_card_dialog]
export class NavParams {
    viewName: string = '';
    constructor(viewName: string) {
        this.viewName = viewName;
    }
}

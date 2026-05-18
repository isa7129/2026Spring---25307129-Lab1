if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ProductInfo_Params {
    currentBreakpoint?: string;
    pageBreakpoint?: string;
}
interface ProductPicture_Params {
    currentBreakpoint?: string;
    topRectHeight?: number;
    isSplitMode?: boolean;
    currentSwiperIndex?: number;
    pageBreakpoint?: string;
    isMoreLiveDetail?: boolean;
    pageInfos?: NavPathStack;
    context?: Context;
    pipWindowUtil?: PipWindowUtil | undefined;
    abilityName?: string;
    is2in1?: boolean;
}
import type { BusinessError } from "@ohos:base";
import deviceInfo from "@ohos:deviceInfo";
import AbilityConstant from "@ohos:app.ability.AbilityConstant";
import type common from "@ohos:app.ability.common";
import type StartOptions from "@ohos:app.ability.StartOptions";
import type Want from "@ohos:app.ability.Want";
import { ClassifyConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/Index";
import { BreakpointConstants, BreakpointType, CommonConstants, Logger, PipWindowUtil, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { DetailConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/DetailConstants";
import { ProductPrice } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ProductPrice";
import { ProductDiscount } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ProductDiscount";
import { ProductConfig, UserComments } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/ProductConfig";
export class ProductPicture extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.__isSplitMode = this.createStorageLink('isSplitMode', false, "isSplitMode");
        this.__currentSwiperIndex = new ObservedPropertySimplePU(0, this, "currentSwiperIndex");
        this.__pageBreakpoint = new SynchedPropertySimpleOneWayPU(params.pageBreakpoint, this, "pageBreakpoint");
        this.__isMoreLiveDetail = new SynchedPropertySimpleTwoWayPU(params.isMoreLiveDetail, this, "isMoreLiveDetail");
        this.__pageInfos = this.initializeConsume('pageInfos', "pageInfos");
        this.context = this.getUIContext().getHostContext()!;
        this.pipWindowUtil = PipWindowUtil.getPipWindowUtil(this.getUIContext());
        this.abilityName = (this.context as common.UIAbilityContext).abilityInfo.name;
        this.is2in1 = deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ProductPicture_Params) {
        if (params.currentSwiperIndex !== undefined) {
            this.currentSwiperIndex = params.currentSwiperIndex;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.pipWindowUtil !== undefined) {
            this.pipWindowUtil = params.pipWindowUtil;
        }
        if (params.abilityName !== undefined) {
            this.abilityName = params.abilityName;
        }
        if (params.is2in1 !== undefined) {
            this.is2in1 = params.is2in1;
        }
    }
    updateStateVars(params: ProductPicture_Params) {
        this.__pageBreakpoint.reset(params.pageBreakpoint);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__isSplitMode.purgeDependencyOnElmtId(rmElmtId);
        this.__currentSwiperIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__pageBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isMoreLiveDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
        this.__isSplitMode.aboutToBeDeleted();
        this.__currentSwiperIndex.aboutToBeDeleted();
        this.__pageBreakpoint.aboutToBeDeleted();
        this.__isMoreLiveDetail.aboutToBeDeleted();
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
    private __isSplitMode: ObservedPropertyAbstractPU<boolean>;
    get isSplitMode() {
        return this.__isSplitMode.get();
    }
    set isSplitMode(newValue: boolean) {
        this.__isSplitMode.set(newValue);
    }
    private __currentSwiperIndex: ObservedPropertySimplePU<number>;
    get currentSwiperIndex() {
        return this.__currentSwiperIndex.get();
    }
    set currentSwiperIndex(newValue: number) {
        this.__currentSwiperIndex.set(newValue);
    }
    private __pageBreakpoint: SynchedPropertySimpleOneWayPU<string>;
    get pageBreakpoint() {
        return this.__pageBreakpoint.get();
    }
    set pageBreakpoint(newValue: string) {
        this.__pageBreakpoint.set(newValue);
    }
    private __isMoreLiveDetail: SynchedPropertySimpleTwoWayPU<boolean>;
    get isMoreLiveDetail() {
        return this.__isMoreLiveDetail.get();
    }
    set isMoreLiveDetail(newValue: boolean) {
        this.__isMoreLiveDetail.set(newValue);
    }
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    private context: Context;
    private pipWindowUtil: PipWindowUtil | undefined;
    private abilityName: string;
    private is2in1: boolean;
    PictureIndicator(text: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(text);
            Text.fontSize({ "id": 67109589, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.margin({ right: { "id": 67109590, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Text);
        Text.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(Color.White);
            Column.alignItems(HorizontalAlign.Center);
            Column.padding({
                bottom: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[1] ? CommonConstants.BOTTOM_RECT_HEIGHT : 0
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: this.pageBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Alignment.TopEnd :
                    Alignment.End });
            Stack.width(CommonConstants.FULL_PERCENT);
            Stack.layoutWeight(this.pageBreakpoint === BreakpointConstants.BREAKPOINT_LG ? 1 : -1);
            Stack.aspectRatio(new BreakpointType(DetailConstants.LIVE_STACK_ASPECT_RATIO[0], DetailConstants.LIVE_STACK_ASPECT_RATIO[1], -1).getValue(this.pageBreakpoint));
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.align(Alignment.Center);
            Swiper.indicator(false);
            Swiper.displayCount(1);
            Swiper.nextMargin(this.pageBreakpoint === BreakpointConstants.BREAKPOINT_MD ? { "id": 67109637, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                0);
            Swiper.prevMargin(this.pageBreakpoint === BreakpointConstants.BREAKPOINT_MD ? { "id": 67109637, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                0);
            Swiper.height(CommonConstants.FULL_PERCENT);
            Swiper.width(CommonConstants.FULL_PERCENT);
            Swiper.onChange((index: number) => {
                this.currentSwiperIndex = index;
            });
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item);
                    Image.width(CommonConstants.FULL_PERCENT);
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, DetailConstants.PRODUCT_DETAIL_RESOURCES, forEachItemGenFunction, (item: Resource, index: number) => index + JSON.stringify(item), false, true);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
            Row.position({ x: 0, y: DetailConstants.LIVE_ROW_Y_POSITION });
            Row.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109735, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.height(ResourceUtil.getCommonImgSize()[1]);
            Image.width(ResourceUtil.getCommonImgSize()[1]);
            Image.margin({ right: { "id": 67109587, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Image.onClick(() => {
                if (this.isMoreLiveDetail) {
                    this.isMoreLiveDetail = false;
                }
                else {
                    this.pageInfos.pop();
                }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109748, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.height(ResourceUtil.getCommonImgSize()[1]);
            Image.width(ResourceUtil.getCommonImgSize()[1]);
            Image.visibility(this.pageBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Visibility.Visible :
                Visibility.None);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // [Start product_detail]
            Image.create(this.isSplitMode ? { "id": 67109761, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109737, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            // [Start product_detail]
            Image.height(ResourceUtil.getCommonImgSize()[1]);
            // [Start product_detail]
            Image.width(ResourceUtil.getCommonImgSize()[1]);
            // [Start product_detail]
            Image.margin({ right: this.pageBreakpoint === 'sm' ? '16vp' : '24vp' });
            // [Start product_detail]
            Image.onClick(() => {
                if (!this.isSplitMode) {
                    let want: Want = {
                        bundleName: 'com.huawei.multishoppingpricecomparison',
                        abilityName: 'SecondAbility'
                    };
                    let option: StartOptions = { windowMode: AbilityConstant.WindowMode.WINDOW_MODE_SPLIT_PRIMARY };
                    (this.context as common.UIAbilityContext).startAbility(want, option);
                }
                else {
                    (this.context as common.UIAbilityContext).terminateSelf();
                }
            });
            // [Start product_detail]
            Image.visibility(this.pageBreakpoint === BreakpointConstants.BREAKPOINT_MD || this.isSplitMode ?
                Visibility.Visible : Visibility.None);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109738, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.height(ResourceUtil.getCommonImgSize()[1]);
            Image.width(ResourceUtil.getCommonImgSize()[1]);
            Image.visibility(this.pageBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Visibility.None :
                Visibility.Visible);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.onClick(() => {
                if (this.isMoreLiveDetail) {
                    return;
                }
                if (!this.is2in1) {
                    if (this.pipWindowUtil === undefined) {
                        return;
                    }
                    if (this.pipWindowUtil.getIsShowingPip()) {
                        this.pipWindowUtil.stopPip().then(() => {
                            this.pageInfos.pushPath({ name: ClassifyConstants.PAGE_INFO_LIST[0] });
                        }).catch((err: BusinessError) => {
                            Logger.error(`Failed to stop pip. Cause: ${err.code}, message: ${err.message}`);
                        });
                    }
                    else {
                        this.pageInfos.pushPath({ name: ClassifyConstants.PAGE_INFO_LIST[0] });
                    }
                }
                else {
                    this.pageInfos.pushPath({ name: ClassifyConstants.PAGE_INFO_LIST[0] });
                }
            });
            Column.margin({
                top: this.pageBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109597, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                    0,
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
            });
            Column.borderWidth(1);
            Column.borderRadius(ResourceUtil.getCommonBorderRadius()[3]);
            Column.borderColor({ "id": 67109424, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.backgroundColor({ "id": 67109423, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.justifyContent(FlexAlign.SpaceEvenly);
            Column.height({ "id": 67109596, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.width({ "id": 67109598, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.visibility(this.abilityName === 'SecondAbility' ? Visibility.None : Visibility.Visible);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109744, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.width(ResourceUtil.getCommonImgSize()[0]);
            Image.height(ResourceUtil.getCommonImgSize()[0]);
            Image.borderRadius(ResourceUtil.getCommonBorderRadius()[4]);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.LIVING(this.context));
            Text.fontSize({ "id": 67109599, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109600, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
        }, Text);
        Text.pop();
        Column.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
            Row.justifyContent(FlexAlign.End);
            Row.padding({ right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint) });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width({ "id": 67109603, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.height({ "id": 67109602, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.backgroundColor({ "id": 67109443, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.borderRadius(ResourceUtil.getCommonBorderRadius()[3]);
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(JSON.stringify(this.currentSwiperIndex + 1) + DetailConstants.PICTURE_INDICATOR(this.context)[0]);
            Text.fontSize({ "id": 67109601, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.padding({
                left: { "id": 67109593, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                right: { "id": 67109594, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
            Row.backgroundColor({ "id": 67109432, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.width({ "id": 67109595, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.height({ "id": 67109591, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.borderRadius(ResourceUtil.getCommonBorderRadius()[4]);
            Row.margin({ top: { "id": 67109592, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Row);
        this.PictureIndicator.bind(this)(DetailConstants.PICTURE_INDICATOR(this.context)[1]);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(ResourceUtil.getArrowRight());
            Image.width({ "id": 67109586, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.height({ "id": 67109584, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.margin({ right: { "id": 67109585, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Image);
        this.PictureIndicator.bind(this)(DetailConstants.PICTURE_INDICATOR(this.context)[2]);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(ResourceUtil.getArrowRight());
            Image.width({ "id": 67109586, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.height({ "id": 67109584, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height(this.pageBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109701, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109700, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
            Row.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: new BreakpointType(DetailConstants.PICTURE_LIST_SPACES[0], DetailConstants.PICTURE_LIST_SPACES[1], DetailConstants.PICTURE_LIST_SPACES[2]).getValue(this.pageBreakpoint) });
            List.scrollBar(BarState.Off);
            List.listDirection(Axis.Horizontal);
            List.margin({
                top: { "id": 67109702, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                bottom: { "id": 67109702, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
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
                            Image.create(item);
                            Image.width(this.pageBreakpoint === BreakpointConstants.BREAKPOINT_LG ? ResourceUtil.getCommonImgSize()[3] :
                                ResourceUtil.getCommonImgSize()[2]);
                            Image.height(this.pageBreakpoint === BreakpointConstants.BREAKPOINT_LG ? ResourceUtil.getCommonImgSize()[3] :
                                ResourceUtil.getCommonImgSize()[2]);
                            Image.borderRadius(ResourceUtil.getCommonBorderRadius()[3]);
                            Image.borderWidth(index === this.currentSwiperIndex ? 1 : 0);
                        }, Image);
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, DetailConstants.PRODUCT_SMALL_RESOURCES, forEachItemGenFunction, (item: Resource, index: number) => JSON.stringify(item) + index, true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class ProductInfo extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__pageBreakpoint = new SynchedPropertySimpleOneWayPU(params.pageBreakpoint, this, "pageBreakpoint");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ProductInfo_Params) {
    }
    updateStateVars(params: ProductInfo_Params) {
        this.__pageBreakpoint.reset(params.pageBreakpoint);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__pageBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__pageBreakpoint.aboutToBeDeleted();
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
    private __pageBreakpoint: SynchedPropertySimpleOneWayPU<string>;
    get pageBreakpoint() {
        return this.__pageBreakpoint.get();
    }
    set pageBreakpoint(newValue: string) {
        this.__pageBreakpoint.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor({ "id": 67109433, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.width(CommonConstants.FULL_PERCENT);
            Column.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                bottom: { "id": 67109623, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ProductPrice(this, { pageBreakpoint: this.pageBreakpoint }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductDetail.ets", line: 256, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            pageBreakpoint: this.pageBreakpoint
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        pageBreakpoint: this.pageBreakpoint
                    });
                }
            }, { name: "ProductPrice" });
        }
        ProductDiscount.bind(this)(this.pageBreakpoint);
        ProductConfig.bind(this)(this.pageBreakpoint);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new UserComments(this, {}, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ProductDetail.ets", line: 259, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "UserComments" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

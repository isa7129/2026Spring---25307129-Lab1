if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ClassifyBanner_Params {
    currentBreakpoint?: string;
    swiperController?: SwiperController;
    bannerList?: Array<Resource>;
}
interface ClassifyNavDestination_Params {
    currentBreakpoint?: string;
    name?: string;
    scroller?: Scroller;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, BreakpointType, CommonConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { ClassifyShopList } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/ClassifyShopList";
import { BannerList } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/ShopListViewModel";
import { ClassifyConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/ClassifyConstants";
export class ClassifyNavDestination extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__name = new ObservedPropertySimplePU("", this, "name");
        this.scroller = new Scroller();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ClassifyNavDestination_Params) {
        if (params.name !== undefined) {
            this.name = params.name;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
    }
    updateStateVars(params: ClassifyNavDestination_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__name.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__name.aboutToBeDeleted();
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
    private __name: ObservedPropertySimplePU<string>;
    get name() {
        return this.__name.get();
    }
    set name(newValue: string) {
        this.__name.set(newValue);
    }
    private scroller: Scroller;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Scroll.create(this.scroller);
                    Scroll.scrollBarWidth(0);
                    Scroll.padding({
                        top: { "id": 67109129, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                        left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109128, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109127, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                    });
                }, Scroll);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.padding({ bottom: deviceInfo.deviceType !== CommonConstants.DEVICE_TYPES[1] ? 0 :
                            CommonConstants.BOTTOM_RECT_HEIGHT });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.padding({ right: new BreakpointType({ "id": 67109126, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109125, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109124, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" })
                            .getValue(this.currentBreakpoint) });
                }, Row);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ClassifyBanner(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/ClassifyNavdestinationPhone.ets", line: 34, col: 15 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "ClassifyBanner" });
                }
                Row.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ClassifyShopList(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/ClassifyNavdestinationPhone.ets", line: 41, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "ClassifyShopList" });
                }
                Column.pop();
                Scroll.pop();
                Column.pop();
            }, { moduleName: "phone", pagePath: "features/home/src/main/ets/view/ClassifyNavdestinationPhone" });
            NavDestination.hideTitleBar(true);
            NavDestination.backgroundColor(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109022, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109021, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class ClassifyBanner extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.swiperController = new SwiperController();
        this.bannerList = new BannerList().getBannerList();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ClassifyBanner_Params) {
        if (params.swiperController !== undefined) {
            this.swiperController = params.swiperController;
        }
        if (params.bannerList !== undefined) {
            this.bannerList = params.bannerList;
        }
    }
    updateStateVars(params: ClassifyBanner_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
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
    private swiperController: SwiperController;
    private bannerList: Array<Resource>;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create(this.swiperController);
            Swiper.loop(true);
            Swiper.indicator(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
                Indicator.dot()
                    .itemWidth({ "id": 67109153, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" })
                    .itemHeight({ "id": 67109150, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" })
                    .selectedItemWidth({ "id": 67109152, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" })
                    .selectedItemHeight({ "id": 67109151, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" })
                    .color({ "id": 67109019, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" })
                    .selectedColor({ "id": 67109020, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }) : false);
            Swiper.displayCount(new BreakpointType(ClassifyConstants.SWIPER_DISPLAY_COUNT[0], ClassifyConstants.SWIPER_DISPLAY_COUNT[1], ClassifyConstants.SWIPER_DISPLAY_COUNT[2])
                .getValue(this.currentBreakpoint));
            Swiper.nextMargin(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ? { "id": 67109154, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0);
            Swiper.itemSpace(new BreakpointType(ClassifyConstants.SWIPER_ITEM_SPACE[0], ClassifyConstants.SWIPER_ITEM_SPACE[1], ClassifyConstants.SWIPER_ITEM_SPACE[2]).getValue(this.currentBreakpoint));
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item);
                    Image.width(CommonConstants.FULL_PERCENT);
                    Image.height({ "id": 67109123, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Image.aspectRatio(ClassifyConstants.BANNER_IMAGE_RATIO);
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, this.bannerList, forEachItemGenFunction, (item: Resource, index: number) => JSON.stringify(item) + index, false, true);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

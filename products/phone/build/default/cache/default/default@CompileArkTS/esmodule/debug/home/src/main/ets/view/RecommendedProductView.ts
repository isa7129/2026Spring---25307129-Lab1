if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface RecommendedProductView_Params {
    currentBreakpoint?: string;
    windowWidth?: number;
    recommendedProducts?: RecommendedProduct[];
}
import { BreakpointConstants, BreakpointType, CommonConstants, Logger, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/HomeConstants";
import { RecommendedProductViewModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/RecommendedProductViewModel";
import type { RecommendedProduct } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/RecommendedProductViewModel";
export class RecommendedProductView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__windowWidth = this.createStorageLink('windowWidth', 0, "windowWidth");
        this.__recommendedProducts = new ObservedPropertyObjectPU(new RecommendedProductViewModel().getRecommendedProductList(), this, "recommendedProducts");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: RecommendedProductView_Params) {
        if (params.recommendedProducts !== undefined) {
            this.recommendedProducts = params.recommendedProducts;
        }
    }
    updateStateVars(params: RecommendedProductView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__windowWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__recommendedProducts.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__windowWidth.aboutToBeDeleted();
        this.__recommendedProducts.aboutToBeDeleted();
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
    private __windowWidth: ObservedPropertyAbstractPU<number>;
    get windowWidth() {
        return this.__windowWidth.get();
    }
    set windowWidth(newValue: number) {
        this.__windowWidth.set(newValue);
    }
    private __recommendedProducts: ObservedPropertyObjectPU<RecommendedProduct[]>;
    get recommendedProducts() {
        return this.__recommendedProducts.get();
    }
    set recommendedProducts(newValue: RecommendedProduct[]) {
        this.__recommendedProducts.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.displayCount(new BreakpointType(CommonConstants.TWO, CommonConstants.THREE, CommonConstants.FOUR)
                .getValue(this.currentBreakpoint));
            Swiper.itemSpace(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ?
                HomeConstants.RECOMMENDED_PRODUCT_ITEM_SPACES[1] : HomeConstants.RECOMMENDED_PRODUCT_ITEM_SPACES[0]);
            Swiper.margin({
                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109177, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0,
                bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ? { "id": 67109176, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109175, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
            Swiper.indicator(false);
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Stack.create();
                    Stack.alignContent(Alignment.TopEnd);
                    Stack.aspectRatio(1);
                    Stack.width(this.getSwiperWidth(this.currentBreakpoint, this.windowWidth));
                    Stack.height(this.getSwiperWidth(this.currentBreakpoint, this.windowWidth));
                }, Stack);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.getImage());
                    Image.width(CommonConstants.FULL_PERCENT);
                    Image.height(CommonConstants.FULL_PERCENT);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (item.getIsLive()) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Image.create({ "id": 67109311, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                                Image.width(ResourceUtil.getCommonImgSize()[0]);
                                Image.height(ResourceUtil.getCommonImgSize()[0]);
                                Image.margin({
                                    top: { "id": 67109205, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                    right: { "id": 67109205, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                                });
                            }, Image);
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                Stack.pop();
            };
            this.forEachUpdateFunction(elmtId, this.getRecommendedProducts(ObservedObject.GetRawObject(this.recommendedProducts)), forEachItemGenFunction, (item: Resource, index: number) => JSON.stringify(item) + index, false, true);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
    }
    getRecommendedProducts(recommendedProducts: RecommendedProduct[]): RecommendedProduct[] {
        if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM) {
            return recommendedProducts.slice(0, 2);
        }
        else if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            return recommendedProducts.slice(0, 3);
        }
        else {
            return recommendedProducts;
        }
    }
    getSwiperWidth(currentBreakpoint: string, windowWidth: number): string {
        // Obtain the window width and subtract the blank parts on both sides.
        let result: number = this.getUIContext().px2vp(windowWidth) - new BreakpointType(HomeConstants.RECOMMENDED_PRODUCT_VIEW_SPACES[1], HomeConstants.RECOMMENDED_PRODUCT_VIEW_SPACES[2], HomeConstants.RECOMMENDED_PRODUCT_VIEW_SPACES[3])
            .getValue(this.currentBreakpoint);
        if (currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) {
            result = result - CommonConstants.LG_SIDEBAR_WIDTH;
        }
        else {
            Logger.info(`No need to subtract sidebar width`);
        }
        // Calculate the width of a single image based on the number of display counts.
        if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM) {
            result = (result - HomeConstants.RECOMMENDED_PRODUCT_VIEW_SPACES[1] * 1) / CommonConstants.TWO;
        }
        else if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            result = (result - HomeConstants.RECOMMENDED_PRODUCT_VIEW_SPACES[0] * 3) / CommonConstants.FOUR;
        }
        else {
            result = (result - HomeConstants.RECOMMENDED_PRODUCT_VIEW_SPACES[1] * 5) / CommonConstants.FOUR;
        }
        // Calculate the height of a single image, title, and content, and calculate the total height of the grid layout.
        return result / 1 * CommonConstants.TWO + CommonConstants.WIDTH_UNIT;
    }
    rerender() {
        this.updateDirtyElements();
    }
}

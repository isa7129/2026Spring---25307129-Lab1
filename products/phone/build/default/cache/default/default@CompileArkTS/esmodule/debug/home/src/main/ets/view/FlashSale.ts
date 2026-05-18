if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface FlashSale_Params {
    currentBreakpoint?: string;
    windowWidth?: number;
    context?: Context;
    flashSaleProductList?: SectionProduct[];
}
import { BreakpointConstants, BreakpointType, CommonConstants, Logger, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/HomeConstants";
import { SectionProductsViewModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/SectionProductsViewModel";
import type { SectionProduct } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/SectionProductsViewModel";
import { HomeButton, ProductFeature, ProductInfo, ProductPrice, ProductTitle, TitleView } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/CommonView";
export class FlashSale extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__windowWidth = this.createStorageLink('windowWidth', 0, "windowWidth");
        this.context = this.getUIContext().getHostContext()!;
        this.flashSaleProductList = new SectionProductsViewModel(this.context).getFlashSaleProductList();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: FlashSale_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.flashSaleProductList !== undefined) {
            this.flashSaleProductList = params.flashSaleProductList;
        }
    }
    updateStateVars(params: FlashSale_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__windowWidth.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__windowWidth.aboutToBeDeleted();
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
    private context: Context;
    private flashSaleProductList: SectionProduct[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
            Column.backgroundColor(Color.White);
            Column.margin({
                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109165, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109164, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109165, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109164, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Column);
        TitleView.bind(this)(HomeConstants.HOME_TITLES(this.context)[2]);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: BreakpointConstants.GRID_ROW_COLUMNS[0],
                    md: BreakpointConstants.GRID_ROW_COLUMNS[1],
                    lg: BreakpointConstants.GRID_ROW_COLUMNS[2]
                },
                gutter: {
                    x: new BreakpointType({ "id": 67109161, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109160, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109159, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                    y: { "id": 67109162, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                }
            });
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    GridCol.create({
                        span: {
                            sm: BreakpointConstants.GRID_COLUMN_SPANS[2],
                            md: BreakpointConstants.GRID_COLUMN_SPANS[2],
                            lg: BreakpointConstants.GRID_COLUMN_SPANS[2]
                        }
                    });
                    GridCol.height(this.getGridColHeight());
                }, GridCol);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.height(CommonConstants.FULL_PERCENT);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.getProductImg());
                    Image.height(this.getImageHeight(this.currentBreakpoint, this.windowWidth) + CommonConstants.WIDTH_UNIT);
                    Image.aspectRatio(1);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.alignItems(HorizontalAlign.Start);
                    Column.margin({ left: { "id": 67109163, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                    Column.layoutWeight(1);
                    Column.height(CommonConstants.FULL_PERCENT);
                }, Column);
                ProductTitle.bind(this)(item.getTitle(), false);
                ProductInfo.bind(this)(item.getInfo());
                ProductFeature.bind(this)(item.getFeature());
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                ProductPrice.bind(this)(item.getPrice(), item.getOriginalPrice());
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.margin({
                        top: { "id": 67109158, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                        bottom: { "id": 67109155, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                        right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109157, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109156, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                    });
                    Row.alignSelf(ItemAlign.End);
                }, Row);
                HomeButton.bind(this)(HomeConstants.BUTTON_TEXTS(this.context)[1]);
                Row.pop();
                Column.pop();
                Row.pop();
                GridCol.pop();
            };
            this.forEachUpdateFunction(elmtId, this.getCurrentSectionProducts(), forEachItemGenFunction, (item: SectionProduct, index: number) => index + JSON.stringify(item), false, true);
        }, ForEach);
        ForEach.pop();
        GridRow.pop();
        Column.pop();
    }
    getCurrentSectionProducts(): SectionProduct[] {
        if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM) {
            return this.flashSaleProductList.slice(0, 2);
        }
        else if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            return this.flashSaleProductList.slice(0, 4);
        }
        else {
            return this.flashSaleProductList;
        }
    }
    getImageHeight(currentBreakpoint: string, windowWidth: number): number {
        // Obtain the window width and subtract the blank parts on both sides.
        let result: number = this.getUIContext().px2vp(windowWidth) - new BreakpointType(HomeConstants.RECOMMENDED_PRODUCT_VIEW_SPACES[1], HomeConstants.RECOMMENDED_PRODUCT_VIEW_SPACES[2], HomeConstants.RECOMMENDED_PRODUCT_VIEW_SPACES[3])
            .getValue(this.currentBreakpoint) * 2;
        if (currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) {
            result = result - CommonConstants.LG_SIDEBAR_WIDTH;
        }
        else {
            Logger.info(`No need to subtract sidebar width`);
        }
        // Calculate the width of a single image based on the number of display counts.
        if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM) {
            result = result * HomeConstants.FLASH_SALE_IMAGE_PERCENT[0];
        }
        else if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            result = (result - HomeConstants.WELFARE_GRID_COL_GUTTERS[1]) / CommonConstants.TWO *
                HomeConstants.FLASH_SALE_IMAGE_PERCENT[1];
        }
        else {
            result = (result - HomeConstants.WELFARE_GRID_COL_GUTTERS[3] * 2) / CommonConstants.THREE *
                HomeConstants.FLASH_SALE_IMAGE_PERCENT[1];
        }
        return result;
    }
    getGridColHeight(): string {
        if (this.getImageHeight(this.currentBreakpoint, this.windowWidth) <= HomeConstants.FLASH_SALE_INTRO_COL_HEIGHT) {
            return HomeConstants.FLASH_SALE_INTRO_COL_HEIGHT + CommonConstants.WIDTH_UNIT;
        }
        return this.getImageHeight(this.currentBreakpoint, this.windowWidth) + CommonConstants.WIDTH_UNIT;
    }
    rerender() {
        this.updateDirtyElements();
    }
}

if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Selection_Params {
    currentBreakpoint?: string;
    windowWidth?: number;
    context?: Context;
    sectionProducts?: SectionProduct[];
}
import { BreakpointConstants, BreakpointType, CommonConstants, Logger, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/HomeConstants";
import { SectionProductsViewModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/SectionProductsViewModel";
import type { SectionProduct } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/SectionProductsViewModel";
import { ProductComments, ProductFeature, ProductInfo, ProductPrice, ProductTitle, TitleView } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/CommonView";
export class Selection extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__windowWidth = this.createStorageLink('windowWidth', 0, "windowWidth");
        this.context = this.getUIContext().getHostContext()!;
        this.sectionProducts = new SectionProductsViewModel(this.context).getSectionProductList();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Selection_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.sectionProducts !== undefined) {
            this.sectionProducts = params.sectionProducts;
        }
    }
    updateStateVars(params: Selection_Params) {
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
    private sectionProducts: SectionProduct[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
            Column.backgroundColor(Color.White);
            Column.margin({ top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ? { "id": 67109207, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109206, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Column);
        TitleView.bind(this)(HomeConstants.HOME_TITLES(this.context)[1]);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: BreakpointConstants.GRID_ROW_COLUMNS[0],
                    md: BreakpointConstants.GRID_ROW_COLUMNS[2],
                    lg: BreakpointConstants.GRID_ROW_COLUMNS[3]
                },
                gutter: new BreakpointType({ "id": 67109199, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109198, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109197, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint)
            });
            GridRow.width(CommonConstants.FULL_PERCENT);
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    GridCol.create({
                        span: {
                            sm: BreakpointConstants.GRID_COLUMN_SPANS[0],
                            md: BreakpointConstants.GRID_COLUMN_SPANS[2],
                            lg: BreakpointConstants.GRID_COLUMN_SPANS[1]
                        }
                    });
                    GridCol.width(CommonConstants.FULL_PERCENT);
                }, GridCol);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.width(CommonConstants.FULL_PERCENT);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Stack.create();
                    Stack.alignContent(Alignment.TopEnd);
                    Stack.height(this.getStackHeight(this.currentBreakpoint, this.windowWidth));
                    Stack.width(CommonConstants.FULL_PERCENT);
                    Stack.margin({ bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109201, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109200, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                }, Stack);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.getProductImg());
                    Image.objectFit(ImageFit.Contain);
                    Image.aspectRatio(HomeConstants.SELECTION_IMG_ASPECT_RATIO);
                    Image.width(CommonConstants.FULL_PERCENT);
                    Image.height(CommonConstants.FULL_PERCENT);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (index === 1) {
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
                ProductTitle.bind(this)(item.getTitle());
                ProductInfo.bind(this)(item.getInfo());
                ProductFeature.bind(this)(item.getFeature());
                ProductPrice.bind(this)(item.getPrice());
                ProductComments.bind(this)(item.getComments());
                Column.pop();
                GridCol.pop();
            };
            this.forEachUpdateFunction(elmtId, this.getCurrentSectionProducts(), forEachItemGenFunction, (item: SectionProduct, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        GridRow.pop();
        Column.pop();
    }
    getCurrentSectionProducts(): SectionProduct[] {
        if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM) {
            return this.sectionProducts.slice(0, 2);
        }
        else if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            return this.sectionProducts.slice(0, 3);
        }
        else {
            return this.sectionProducts;
        }
    }
    getStackHeight(currentBreakpoint: string, windowWidth: number): string {
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
            result = (result - HomeConstants.WELFARE_GRID_COL_GUTTERS[0] * 1) / CommonConstants.TWO;
        }
        else if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            result = (result - HomeConstants.WELFARE_GRID_COL_GUTTERS[0] * 2) / CommonConstants.THREE;
        }
        else {
            result = (result - HomeConstants.WELFARE_GRID_COL_GUTTERS[1] * 4) / CommonConstants.FIVE;
        }
        // Calculate the height of a single image.
        return result / HomeConstants.SELECTION_IMG_ASPECT_RATIO + CommonConstants.WIDTH_UNIT;
    }
    rerender() {
        this.updateDirtyElements();
    }
}

if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ShopBagIconView_Params {
    currentBreakpoint?: string;
    iconResource?: Resource;
    iconName?: string;
}
interface ShopBagHeader_Params {
    shopCarIcons?: ShopCarIcon[];
    isMoreDetail?: boolean;
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { ShopCarModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/viewmodel/ShopCarViewModel";
import type { ShopCarIcon } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/viewmodel/ShopCarViewModel";
export class ShopBagHeader extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.shopCarIcons = new ShopCarModel(this.getUIContext().getHostContext()!).getShopCarIconList();
        this.__isMoreDetail = new SynchedPropertySimpleTwoWayPU(params.isMoreDetail, this, "isMoreDetail");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ShopBagHeader_Params) {
        if (params.shopCarIcons !== undefined) {
            this.shopCarIcons = params.shopCarIcons;
        }
    }
    updateStateVars(params: ShopBagHeader_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isMoreDetail.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isMoreDetail.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private shopCarIcons: ShopCarIcon[];
    private __isMoreDetail: SynchedPropertySimpleTwoWayPU<boolean>;
    get isMoreDetail() {
        return this.__isMoreDetail.get();
    }
    set isMoreDetail(newValue: boolean) {
        this.__isMoreDetail.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 67109685, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 67109411, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.fontSize({ "id": 67109478, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109479, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ShopBagIconView(this, { iconResource: this.shopCarIcons[0].getIcon(), iconName: this.shopCarIcons[0].getName() }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ShopBagHeader.ets", line: 31, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            iconResource: this.shopCarIcons[0].getIcon(),
                            iconName: this.shopCarIcons[0].getName()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ShopBagIconView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ShopBagIconView(this, { iconResource: this.shopCarIcons[1].getIcon(), iconName: this.shopCarIcons[1].getName() }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ShopBagHeader.ets", line: 32, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            iconResource: this.shopCarIcons[1].getIcon(),
                            iconName: this.shopCarIcons[1].getName()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ShopBagIconView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ShopBagIconView(this, { iconResource: this.shopCarIcons[2].getIcon(), iconName: this.shopCarIcons[2].getName() }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/ShopBagHeader.ets", line: 33, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            iconResource: this.shopCarIcons[2].getIcon(),
                            iconName: this.shopCarIcons[2].getName()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ShopBagIconView" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109752, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.width({ "id": 67109451, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.onClick(() => {
                this.isMoreDetail = false;
            });
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ShopBagIconView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.iconResource = { "id": 67109749, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" };
        this.iconName = '';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ShopBagIconView_Params) {
        if (params.iconResource !== undefined) {
            this.iconResource = params.iconResource;
        }
        if (params.iconName !== undefined) {
            this.iconName = params.iconName;
        }
    }
    updateStateVars(params: ShopBagIconView_Params) {
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
    public iconResource: Resource;
    public iconName: string;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.End);
            Column.width({ "id": 67109458, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.margin({
                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109455, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109456, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.iconResource);
            Image.width({ "id": 67109457, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.margin({
                bottom: { "id": 67109454, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.iconName);
            Text.fontSize({ "id": 67109452, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109453, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

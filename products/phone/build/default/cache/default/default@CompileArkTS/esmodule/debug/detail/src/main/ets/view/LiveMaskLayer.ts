if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface LiveMaskLayer_Params {
    topRectHeight?: number;
    currentBreakpoint?: string;
    currentProductIndex?: number;
    liveProductList?: LiveProduct[];
    detailType?: string;
    isMoreDetail?: boolean;
}
import deviceInfo from "@ohos:deviceInfo";
import { CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { Comment } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/Comment";
import { LiveShopList } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/LiveShopList";
import { LiveViewModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/viewmodel/LiveViewModel";
import type { LiveProduct } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/viewmodel/LiveViewModel";
export class LiveMaskLayer extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.__currentBreakpoint = new SynchedPropertySimpleOneWayPU(params.currentBreakpoint, this, "currentBreakpoint");
        this.__currentProductIndex = new ObservedPropertySimplePU(0, this, "currentProductIndex");
        this.__liveProductList = new ObservedPropertyObjectPU(new LiveViewModel().getProductList().reverse(), this, "liveProductList");
        this.__detailType = new SynchedPropertySimpleTwoWayPU(params.detailType, this, "detailType");
        this.__isMoreDetail = new SynchedPropertySimpleTwoWayPU(params.isMoreDetail, this, "isMoreDetail");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LiveMaskLayer_Params) {
        if (params.currentBreakpoint === undefined) {
            this.__currentBreakpoint.set('lg');
        }
        if (params.currentProductIndex !== undefined) {
            this.currentProductIndex = params.currentProductIndex;
        }
        if (params.liveProductList !== undefined) {
            this.liveProductList = params.liveProductList;
        }
    }
    updateStateVars(params: LiveMaskLayer_Params) {
        this.__currentBreakpoint.reset(params.currentBreakpoint);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__currentProductIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__liveProductList.purgeDependencyOnElmtId(rmElmtId);
        this.__detailType.purgeDependencyOnElmtId(rmElmtId);
        this.__isMoreDetail.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__topRectHeight.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__currentProductIndex.aboutToBeDeleted();
        this.__liveProductList.aboutToBeDeleted();
        this.__detailType.aboutToBeDeleted();
        this.__isMoreDetail.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __topRectHeight: ObservedPropertyAbstractPU<number>;
    get topRectHeight() {
        return this.__topRectHeight.get();
    }
    set topRectHeight(newValue: number) {
        this.__topRectHeight.set(newValue);
    }
    private __currentBreakpoint: SynchedPropertySimpleOneWayPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __currentProductIndex: ObservedPropertySimplePU<number>;
    get currentProductIndex() {
        return this.__currentProductIndex.get();
    }
    set currentProductIndex(newValue: number) {
        this.__currentProductIndex.set(newValue);
    }
    private __liveProductList: ObservedPropertyObjectPU<LiveProduct[]>;
    get liveProductList() {
        return this.__liveProductList.get();
    }
    set liveProductList(newValue: LiveProduct[]) {
        this.__liveProductList.set(newValue);
    }
    private __detailType: SynchedPropertySimpleTwoWayPU<string>;
    get detailType() {
        return this.__detailType.get();
    }
    set detailType(newValue: string) {
        this.__detailType.set(newValue);
    }
    private __isMoreDetail: SynchedPropertySimpleTwoWayPU<boolean>;
    get isMoreDetail() {
        return this.__isMoreDetail.get();
    }
    set isMoreDetail(newValue: boolean) {
        this.__isMoreDetail.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // [Start change_flex_direction]
            Flex.create({
                direction: this.currentBreakpoint === 'lg' ? FlexDirection.Row : FlexDirection.Column,
                justifyContent: this.currentBreakpoint === 'lg' ? FlexAlign.SpaceBetween : FlexAlign.End
            });
            // [Start change_flex_direction]
            Flex.layoutWeight(1);
            // [Start change_flex_direction]
            Flex.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: this.currentBreakpoint === 'lg' ? { "id": 67109528, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0,
                top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight
            });
        }, Flex);
        Comment.bind(this)(this.currentBreakpoint, this.getUIContext().getHostContext()!);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new LiveShopList(this, {
                        currentBreakpoint: this.currentBreakpoint,
                        detailType: this.__detailType,
                        isMoreDetail: this.__isMoreDetail
                    }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/LiveMaskLayer.ets", line: 38, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            currentBreakpoint: this.currentBreakpoint,
                            detailType: this.detailType,
                            isMoreDetail: this.isMoreDetail
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        currentBreakpoint: this.currentBreakpoint
                    });
                }
            }, { name: "LiveShopList" });
        }
        // [Start change_flex_direction]
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

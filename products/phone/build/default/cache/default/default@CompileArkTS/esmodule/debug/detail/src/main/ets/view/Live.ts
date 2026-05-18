if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Live_Params {
    topRectHeight?: number;
    currentBreakpoint?: string;
    detailType?: string;
    isMoreDetail?: boolean;
    shopCarButton?: () => void;
    pageInfos?: NavPathStack;
    pipWindowUtil?: PipWindowUtil | undefined;
    surfaceId?: string;
    avPlayerUtil?: AvPlayerUtil | undefined;
}
import deviceInfo from "@ohos:deviceInfo";
import { AvPlayerUtil, BreakpointConstants, BreakpointType, CommonConstants, PipWindowUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { LiveConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/LiveConstants";
import { CommentInput } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/CommentInput";
import { LiveMaskLayer } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/LiveMaskLayer";
import { LiverHeader } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/LiverHeader";
export class Live extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.__currentBreakpoint = new SynchedPropertySimpleOneWayPU(params.currentBreakpoint, this, "currentBreakpoint");
        this.__detailType = new SynchedPropertySimpleTwoWayPU(params.detailType, this, "detailType");
        this.__isMoreDetail = new SynchedPropertySimpleTwoWayPU(params.isMoreDetail, this, "isMoreDetail");
        this.shopCarButton = this.shopCarBuilder;
        this.__pageInfos = this.initializeConsume('pageInfos', "pageInfos");
        this.pipWindowUtil = PipWindowUtil.getPipWindowUtil(this.getUIContext());
        this.surfaceId = '';
        this.avPlayerUtil = AvPlayerUtil.getAvPlayerUtil(this.getUIContext());
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Live_Params) {
        if (params.currentBreakpoint === undefined) {
            this.__currentBreakpoint.set(BreakpointConstants.BREAKPOINT_LG);
        }
        if (params.shopCarButton !== undefined) {
            this.shopCarButton = params.shopCarButton;
        }
        if (params.pipWindowUtil !== undefined) {
            this.pipWindowUtil = params.pipWindowUtil;
        }
        if (params.surfaceId !== undefined) {
            this.surfaceId = params.surfaceId;
        }
        if (params.avPlayerUtil !== undefined) {
            this.avPlayerUtil = params.avPlayerUtil;
        }
    }
    updateStateVars(params: Live_Params) {
        this.__currentBreakpoint.reset(params.currentBreakpoint);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__detailType.purgeDependencyOnElmtId(rmElmtId);
        this.__isMoreDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__topRectHeight.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__detailType.aboutToBeDeleted();
        this.__isMoreDetail.aboutToBeDeleted();
        this.__pageInfos.aboutToBeDeleted();
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
    shopCarBuilder(parent = null) { }
    liveCloseBuilder(parent = null) { }
    private __shopCarButton;
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    private pipWindowUtil: PipWindowUtil | undefined;
    private surfaceId: string;
    private avPlayerUtil: AvPlayerUtil | undefined;
    aboutToDisappear(): void {
        if (this.avPlayerUtil === undefined) {
            return;
        }
        this.avPlayerUtil.release();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(Color.Black);
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.padding({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Start });
            Stack.layoutWeight(1);
            Stack.width(CommonConstants.FULL_PERCENT);
            Stack.onClick(() => {
                if (this.avPlayerUtil === undefined) {
                    return;
                }
                this.avPlayerUtil.playerStateControl();
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            XComponent.create({
                id: LiveConstants.X_COMPONENT_PARAMS[0],
                type: XComponentType.SURFACE,
                controller: this.pipWindowUtil?.getXComponentController()
            }, "com.huawei.multishoppingpricecomparison/phone");
            XComponent.onLoad(() => {
                if (this.pipWindowUtil === undefined) {
                    return;
                }
                this.surfaceId = this.pipWindowUtil.getXComponentController().getXComponentSurfaceId();
                if (this.avPlayerUtil === undefined) {
                    return;
                }
                this.avPlayerUtil.createAvPlayer(this.surfaceId);
            });
            XComponent.width(new BreakpointType({ "id": 67109534, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109533, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109532, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint));
            XComponent.aspectRatio(LiveConstants.X_COMPONENT_ASPECT_RATIO);
        }, XComponent);
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(CommonConstants.FULL_PERCENT);
            Column.width(CommonConstants.FULL_PERCENT);
            Column.justifyContent(FlexAlign.SpaceBetween);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new LiverHeader(this, {}, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/Live.ets", line: 73, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "LiverHeader" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new LiveMaskLayer(this, {
                        currentBreakpoint: this.currentBreakpoint,
                        detailType: this.__detailType,
                        isMoreDetail: this.__isMoreDetail
                    }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/Live.ets", line: 74, col: 11 });
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
            }, { name: "LiveMaskLayer" });
        }
        Column.pop();
        Stack.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommentInput(this, { currentBreakpoint: this.__currentBreakpoint, shopCarButton: (): void => { this.shopCarButton(); } }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/Live.ets", line: 92, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            currentBreakpoint: this.currentBreakpoint,
                            shopCarButton: (): void => { this.shopCarButton(); }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "CommentInput" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

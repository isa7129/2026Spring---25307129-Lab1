if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface LiverHeader_Params {
    currentBreakpoint?: string;
    pageInfos?: NavPathStack;
    liveCloseButton?: () => void;
    pipWindowUtil?: PipWindowUtil | undefined;
    is2in1?: boolean;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, CommonConstants, PipWindowUtil, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { DetailConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/DetailConstants";
export class LiverHeader extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = new SynchedPropertySimpleOneWayPU(params.currentBreakpoint, this, "currentBreakpoint");
        this.__pageInfos = this.initializeConsume('pageInfos', "pageInfos");
        this.liveCloseButton = this.liveCloseBuilder;
        this.pipWindowUtil = PipWindowUtil.getPipWindowUtil(this.getUIContext());
        this.is2in1 = deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LiverHeader_Params) {
        if (params.currentBreakpoint === undefined) {
            this.__currentBreakpoint.set(BreakpointConstants.BREAKPOINT_LG);
        }
        if (params.liveCloseButton !== undefined) {
            this.liveCloseButton = params.liveCloseButton;
        }
        if (params.pipWindowUtil !== undefined) {
            this.pipWindowUtil = params.pipWindowUtil;
        }
        if (params.is2in1 !== undefined) {
            this.is2in1 = params.is2in1;
        }
    }
    updateStateVars(params: LiverHeader_Params) {
        this.__currentBreakpoint.reset(params.currentBreakpoint);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__pageInfos.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBreakpoint: SynchedPropertySimpleOneWayPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    liveCloseBuilder(parent = null) { }
    private __liveCloseButton;
    private pipWindowUtil: PipWindowUtil | undefined;
    private is2in1: boolean;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 67109704, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
            });
            Row.margin({ top: { "id": 67109706, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 67109704, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.backgroundColor({ "id": 67109442, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.border({ radius: { "id": 67109703, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109774, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.width({ "id": 67109531, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.margin({ right: { "id": 67109530, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ right: { "id": 67109705, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 67109414, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontSize({ "id": 67109707, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 67109404, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontSize({ "id": 67109547, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109753, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.width(ResourceUtil.getCommonImgSize()[0]);
            Image.height(ResourceUtil.getCommonImgSize()[0]);
            Image.onClick(() => {
                if (!this.is2in1) {
                    if (this.pipWindowUtil === undefined) {
                        return;
                    }
                    this.pipWindowUtil.startPip(DetailConstants.NAVIGATION_ID, this.pipWindowUtil.getXComponentController(), this.getUIContext().getHostContext()!, ObservedObject.GetRawObject(this.pageInfos));
                }
                else {
                    this.pageInfos.pop();
                }
            });
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

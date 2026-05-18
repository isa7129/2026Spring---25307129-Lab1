if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommentInput_Params {
    currentBreakpoint?: string;
    shopCarButton?: () => void;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { LiveConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/LiveConstants";
export class CommentInput extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = new SynchedPropertySimpleTwoWayPU(params.currentBreakpoint, this, "currentBreakpoint");
        this.shopCarButton = this.shopCarBuilder;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommentInput_Params) {
        if (params.shopCarButton !== undefined) {
            this.shopCarButton = params.shopCarButton;
        }
    }
    updateStateVars(params: CommentInput_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBreakpoint: SynchedPropertySimpleTwoWayPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    shopCarBuilder(parent = null) {
    }
    private __shopCarButton;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 67109484, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
            });
            Row.margin({
                top: { "id": 67109488, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                bottom: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? LiveConstants.EIGHT : LiveConstants.EIGHT +
                    CommonConstants.BOTTOM_RECT_HEIGHT
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: { "id": 67109397, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            TextInput.layoutWeight(1);
            TextInput.backgroundColor({ "id": 67109420, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            TextInput.placeholderColor(Color.White);
            TextInput.fontSize({ "id": 67109483, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            TextInput.enableKeyboardOnFocus(false);
            TextInput.margin({
                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109485, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109486, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109760, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.width(ResourceUtil.getCommonImgSize()[0]);
            Image.height(ResourceUtil.getCommonImgSize()[0]);
            Image.margin({
                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109485, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109486, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109755, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.width(ResourceUtil.getCommonImgSize()[0]);
            Image.height(ResourceUtil.getCommonImgSize()[0]);
            Image.margin({
                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109485, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109486, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Image);
        this.shopCarButton.bind(this)();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

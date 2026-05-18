if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface WelfareView_Params {
    currentBreakpoint?: string;
    context?: Context;
    welfareList?: IconInfo[];
}
import { BreakpointConstants, BreakpointType, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/HomeConstants";
import { IconInfoViewModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/IconInfoViewModel";
import type { IconInfo } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/IconInfoViewModel";
import { HomeButton } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/view/CommonView";
export class WelfareView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.context = this.getUIContext().getHostContext()!;
        this.welfareList = new IconInfoViewModel(this.context).getWelfareList();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: WelfareView_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.welfareList !== undefined) {
            this.welfareList = params.welfareList;
        }
    }
    updateStateVars(params: WelfareView_Params) {
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
    private context: Context;
    private welfareList: IconInfo[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(new BreakpointType({ "id": 67109254, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109253, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109252, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint));
            Column.width(CommonConstants.FULL_PERCENT);
            Column.padding({
                left: { "id": 67109255, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                right: { "id": 67109255, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
            Column.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
            Column.linearGradient({
                direction: GradientDirection.Right,
                repeating: false,
                colors: [[HomeConstants.GRADIENT_COLORS[0], 0.0], [HomeConstants.GRADIENT_COLORS[1], 1.0]]
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.Start);
            Row.height({ "id": 67109237, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(HomeConstants.HOME_TITLES(this.context)[0]);
            Text.fontSize({ "id": 67109236, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109238, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        HomeButton.bind(this)(HomeConstants.BUTTON_TEXTS(this.context)[0]);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height(new BreakpointType({ "id": 67109263, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109262, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109261, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint));
            Row.width(CommonConstants.FULL_PERCENT);
            Row.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
            Row.backgroundColor(Color.White);
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding({
                left: new BreakpointType({ "id": 67109266, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109265, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109264, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                right: new BreakpointType({ "id": 67109266, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109265, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109264, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint)
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.height(CommonConstants.FULL_PERCENT);
                    Column.justifyContent(FlexAlign.Start);
                    Column.backgroundColor(Color.White);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.getIcon());
                    Image.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109257, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109256, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Image.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109257, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109256, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(HomeConstants.TIP_TEXTS(this.context)[0]);
                    Text.fontSize({ "id": 67109267, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.fontWeight(FontWeight.Normal);
                    Text.lineHeight({ "id": 67109268, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.width({ "id": 67109269, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.borderRadius(ResourceUtil.getCommonBorderRadius()[5]);
                    Text.backgroundColor({ "id": 67109038, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.textAlign(TextAlign.Center);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getInfo());
                    Text.fontSize({ "id": 67109258, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.lineHeight({ "id": 67109259, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                    Text.margin({ top: { "id": 67109260, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                }, Text);
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.getCurrentWelfareList(), forEachItemGenFunction, (item: IconInfo, index: number) => index + JSON.stringify(item), false, true);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        Column.pop();
    }
    getCurrentWelfareList(): IconInfo[] {
        if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM) {
            return this.welfareList.slice(0, 3);
        }
        else if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            return this.welfareList.slice(0, 6);
        }
        else {
            return this.welfareList;
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}

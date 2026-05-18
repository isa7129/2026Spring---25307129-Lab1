if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CustomerServiceView_Params {
    currentBreakpoint?: string;
    topRectHeight?: number;
    pageInfos?: NavPathStack;
    context?: Context;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, BreakpointType, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { DetailConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/DetailConstants";
export class CustomerServiceView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.__pageInfos = this.initializeConsume('pageInfos', "pageInfos");
        this.context = this.getUIContext().getHostContext()!;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CustomerServiceView_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: CustomerServiceView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
        this.__pageInfos.aboutToBeDeleted();
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
    private __topRectHeight: ObservedPropertyAbstractPU<number>;
    get topRectHeight() {
        return this.__topRectHeight.get();
    }
    set topRectHeight(newValue: number) {
        this.__topRectHeight.set(newValue);
    }
    private __pageInfos: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    private context: Context;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(CommonConstants.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 67109672, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
            Row.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
            });
            Row.margin({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? { "id": 67109673, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : this.topRectHeight });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({ right: { "id": 67109717, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Column.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? Visibility.Visible :
                Visibility.None);
        }, Column);
        NormalImage.bind(this)({ "id": 67109305, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, () => {
            this.pageInfos.pop();
        });
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({ right: { "id": 67109717, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Column);
        NormalImage.bind(this)({ "id": 67109790, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.CUSTOMER_SERVICE_CONTENTS(this.context)[0]);
            Text.fontSize({ "id": 67109505, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109506, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({ right: new BreakpointType({ "id": 67109546, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109545, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109544, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint) });
        }, Column);
        NormalImage.bind(this)({ "id": 67109745, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? Visibility.None :
                Visibility.Visible);
        }, Column);
        NormalImage.bind(this)({ "id": 67109740, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, () => {
            this.pageInfos.pop();
        });
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.strokeWidth(1);
            Divider.color(ResourceUtil.getCommonDividerColor());
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
            Scroll.align(Alignment.Top);
            Scroll.layoutWeight(1);
            Scroll.width(CommonConstants.FULL_PERCENT);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.padding({
                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109671, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109670, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109671, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109670, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                left: { "id": 67109671, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                right: { "id": 67109671, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 67109658, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.width((CommonConstants.FULL_PERCENT));
            Row.borderRadius(ResourceUtil.getCommonBorderRadius()[4]);
            Row.backgroundColor(Color.White);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109791, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.height(CommonConstants.FULL_PERCENT);
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.layoutWeight(1);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.padding({
                top: { "id": 67109668, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                bottom: { "id": 67109664, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109665, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0,
                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109667, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109666, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.CUSTOMER_SERVICE_CONTENTS(this.context)[4]);
            Text.fontSize({ "id": 67109657, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109660, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.width(CommonConstants.FULL_PERCENT);
            Text.maxLines(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? CommonConstants.THREE :
                CommonConstants.TWO);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.margin({ bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109663, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109662, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 67109669, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.CUSTOMER_SERVICE_CONTENTS(this.context)[1]);
            Text.fontSize({ "id": 67109655, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight(CommonConstants.FULL_PERCENT);
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.fontColor({ "id": 67109438, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.margin({ right: { "id": 67109661, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Text.displayPriority(2);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.CUSTOMER_SERVICE_CONTENTS(this.context)[2]);
            Text.fontSize({ "id": 67109656, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109659, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.fontColor({ "id": 67109437, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.decoration({
                type: TextDecorationType.LineThrough,
                color: { "id": 67109437, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
            Text.displayPriority(1);
            Text.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Visibility.Visible :
                Visibility.None);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.displayPriority(3);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(DetailConstants.CUSTOMER_SERVICE_CONTENTS(this.context)[3]);
            Button.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 67109654, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109653, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Button.height(CommonConstants.FULL_PERCENT);
            Button.fontSize({ "id": 67109652, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Button.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Button.borderRadius(ResourceUtil.getCommonBorderRadius()[5]);
            Button.backgroundColor({ "id": 67109438, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Button.displayPriority(3);
        }, Button);
        Button.pop();
        Row.pop();
        Column.pop();
        Row.pop();
        MessageView.bind(this)(DetailConstants.CUSTOMER_SERVICE_CONTENTS(this.context)[5], false, false);
        MessageView.bind(this)(DetailConstants.CUSTOMER_SERVICE_CONTENTS(this.context)[6], true, false);
        MessageView.bind(this)(DetailConstants.CUSTOMER_SERVICE_CONTENTS(this.context)[7], true, true);
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.strokeWidth(1);
            Divider.color(ResourceUtil.getCommonDividerColor());
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height(deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? CommonConstants.TAB_BAR_HEIGHT :
                CommonConstants.TAB_BAR_HEIGHT + CommonConstants.BOTTOM_RECT_HEIGHT);
            Row.width(CommonConstants.FULL_PERCENT);
            Row.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                bottom: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : CommonConstants.BOTTOM_RECT_HEIGHT
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({ right: new BreakpointType({ "id": 67109676, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109675, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109674, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" })
                    .getValue(this.currentBreakpoint) });
        }, Column);
        NormalImage.bind(this)({ "id": 67109747, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create();
            TextInput.height({ "id": 67109712, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            TextInput.layoutWeight(1);
            TextInput.margin({ right: new BreakpointType({ "id": 67109676, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109675, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109674, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" })
                    .getValue(this.currentBreakpoint) });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({ right: new BreakpointType({ "id": 67109676, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109675, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109674, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" })
                    .getValue(this.currentBreakpoint) });
        }, Column);
        NormalImage.bind(this)({ "id": 67109741, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Column.pop();
        NormalImage.bind(this)({ "id": 67109739, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function NormalImage(imageResource: Resource = { "id": 67109305, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, onClick?: () => void, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Image.create(imageResource);
        Image.width(ResourceUtil.getCommonImgSize()[0]);
        Image.height(ResourceUtil.getCommonImgSize()[0]);
        Image.onClick(onClick);
    }, Image);
}
function MessageView(messageContent: string = '', isReceiving: boolean = false, isSameSender: boolean = false, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Flex.create({
            direction: isReceiving ? FlexDirection.Row : FlexDirection.RowReverse,
            justifyContent: FlexAlign.Start,
            alignItems: ItemAlign.Start
        });
        Flex.margin({ top: isSameSender ? { "id": 67109538, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109537, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        Flex.width(CommonConstants.FULL_PERCENT);
        Flex.padding({
            left: !isReceiving ? { "id": 67109539, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : (isSameSender ? { "id": 67109539, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0),
            right: isReceiving ? { "id": 67109539, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : (isSameSender ? { "id": 67109539, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0)
        });
    }, Flex);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Image.create(isReceiving ? { "id": 67109790, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109792, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Image.width(ResourceUtil.getCommonImgSize()[2]);
        Image.height(ResourceUtil.getCommonImgSize()[2]);
        Image.objectFit(ImageFit.Contain);
        Image.visibility(isSameSender ? Visibility.None : Visibility.Visible);
        Image.margin({
            left: !isReceiving ? { "id": 67109540, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0,
            right: isReceiving ? { "id": 67109540, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0
        });
    }, Image);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.borderRadius(ResourceUtil.getCommonBorderRadius()[3]);
        Row.padding({
            top: { "id": 67109542, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            bottom: { "id": 67109542, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            left: { "id": 67109541, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            right: { "id": 67109541, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
        Row.backgroundColor(isReceiving ? Color.White : { "id": 67109425, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(messageContent);
        Text.fontSize({ "id": 67109535, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.lineHeight({ "id": 67109536, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
    }, Text);
    Text.pop();
    Row.pop();
    Flex.pop();
}

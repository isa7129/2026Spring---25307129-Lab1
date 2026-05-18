if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface PayCard_Params {
    realBreakpoint?: string;
    currentBreakpoint?: string;
    isOpen?: boolean;
    detailType?: string;
    context?: Context;
    payCardSelectList?: SelectProjectItem[];
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { DetailConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/DetailConstants";
import { PayCardViewModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/viewmodel/PayCardViewModel";
import type { SelectProjectItem, SelectItem } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/viewmodel/PayCardViewModel";
export class PayCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__realBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "realBreakpoint");
        this.__currentBreakpoint = new SynchedPropertySimpleOneWayPU(params.currentBreakpoint, this, "currentBreakpoint");
        this.__isOpen = new SynchedPropertySimpleTwoWayPU(params.isOpen, this, "isOpen");
        this.__detailType = new SynchedPropertySimpleTwoWayPU(params.detailType, this, "detailType");
        this.context = this.getUIContext().getHostContext()!;
        this.payCardSelectList = new PayCardViewModel(this.context).getPayCardSelectList();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PayCard_Params) {
        if (params.currentBreakpoint === undefined) {
            this.__currentBreakpoint.set(BreakpointConstants.BREAKPOINT_LG);
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.payCardSelectList !== undefined) {
            this.payCardSelectList = params.payCardSelectList;
        }
    }
    updateStateVars(params: PayCard_Params) {
        this.__currentBreakpoint.reset(params.currentBreakpoint);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__realBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isOpen.purgeDependencyOnElmtId(rmElmtId);
        this.__detailType.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__realBreakpoint.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isOpen.aboutToBeDeleted();
        this.__detailType.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __realBreakpoint: ObservedPropertyAbstractPU<string>;
    get realBreakpoint() {
        return this.__realBreakpoint.get();
    }
    set realBreakpoint(newValue: string) {
        this.__realBreakpoint.set(newValue);
    }
    private __currentBreakpoint: SynchedPropertySimpleOneWayPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __isOpen: SynchedPropertySimpleTwoWayPU<boolean>;
    get isOpen() {
        return this.__isOpen.get();
    }
    set isOpen(newValue: boolean) {
        this.__isOpen.set(newValue);
    }
    private __detailType: SynchedPropertySimpleTwoWayPU<string>;
    get detailType() {
        return this.__detailType.get();
    }
    set detailType(newValue: string) {
        this.__detailType.set(newValue);
    }
    private context: Context;
    private payCardSelectList: SelectProjectItem[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.padding({
                left: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint),
                right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint)
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
            Scroll.layoutWeight(1);
            Scroll.align(Alignment.Top);
            Scroll.width(CommonConstants.FULL_PERCENT);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(CommonConstants.FULL_PERCENT);
            Row.margin({ bottom: { "id": 67109562, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109775, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.height(ResourceUtil.getCommonImgSize()[4]);
            Image.width(ResourceUtil.getCommonImgSize()[4]);
            Image.margin({ right: { "id": 67109561, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.CUSTOMER_SERVICE_CONTENTS(this.context)[1]);
            Text.fontColor({ "id": 67109438, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontSize({ "id": 67109560, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109751, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.width(ResourceUtil.getCommonImgSize()[0]);
            Image.height(ResourceUtil.getCommonImgSize()[0]);
            Image.onClick(() => {
                if (this.detailType === CommonConstants.BIND_SHEET_PAGE_TYPES[3]) {
                    this.isOpen = false;
                }
                else {
                    this.detailType = CommonConstants.BIND_SHEET_PAGE_TYPES[0];
                }
            });
            Image.alignSelf(ItemAlign.Start);
            Image.margin({ top: { "id": 67109559, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Image.visibility(this.realBreakpoint === BreakpointConstants.BREAKPOINT_SM ? Visibility.None :
                Visibility.Visible);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109752, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.width(ResourceUtil.getCommonImgSize()[5]);
            Image.height(ResourceUtil.getCommonImgSize()[5]);
            Image.onClick(() => {
                if (this.detailType === CommonConstants.BIND_SHEET_PAGE_TYPES[3]) {
                    this.isOpen = false;
                }
                else {
                    this.detailType = CommonConstants.BIND_SHEET_PAGE_TYPES[0];
                }
            });
            Image.alignSelf(ItemAlign.Start);
            Image.margin({ top: { "id": 67109559, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Image.visibility(this.realBreakpoint !== BreakpointConstants.BREAKPOINT_SM ? Visibility.None :
                Visibility.Visible);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.margin({ bottom: { "id": 67109578, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Row.width(CommonConstants.FULL_PERCENT);
            Row.backgroundColor(Color.White);
            Row.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
            Row.padding({
                top: { "id": 67109580, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                bottom: { "id": 67109580, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                left: { "id": 67109579, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                right: { "id": 67109579, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109758, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.height(ResourceUtil.getCommonImgSize()[5]);
            Image.width(ResourceUtil.getCommonImgSize()[5]);
            Image.margin({ right: { "id": 67109581, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.layoutWeight(1);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.PAY_INFO(this.context)[0]);
            Text.fontSize({ "id": 67109551, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.width(CommonConstants.FULL_PERCENT);
            Text.maxLines(1);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.margin({ bottom: { "id": 67109552, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.PAY_INFO(this.context)[1]);
            Text.fontSize({ "id": 67109574, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontColor({ "id": 67109429, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.width(CommonConstants.FULL_PERCENT);
            Text.maxLines(1);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_PERCENT);
            Column.margin({ bottom: { "id": 67109564, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Column.backgroundColor(Color.White);
            Column.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
            Column.padding({
                left: { "id": 67109566, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                right: { "id": 67109566, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.margin({ top: { "id": 67109565, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                    Column.width(CommonConstants.FULL_PERCENT);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getName());
                    Text.fontSize({ "id": 67109571, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.alignSelf(ItemAlign.Start);
                    Text.margin({ bottom: { "id": 67109573, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                    Text.lineHeight({ "id": 67109572, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Flex.create({
                        wrap: FlexWrap.Wrap,
                        justifyContent: FlexAlign.Start
                    });
                    Flex.width(CommonConstants.FULL_PERCENT);
                }, Flex);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = (_item, selectIndex: number) => {
                        const selectItem = _item;
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.backgroundColor(selectIndex === 0 ? { "id": 67109428, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                                ResourceUtil.getCommonBackgroundColor()[2]);
                            Row.border({
                                color: selectIndex === 0 ? { "id": 67109438, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                                    ResourceUtil.getCommonBackgroundColor()[2],
                                width: index === 0 ? { "id": 67109563, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0,
                                radius: ResourceUtil.getCommonBorderRadius()[3]
                            });
                            Row.height({ "id": 67109567, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Row.margin({
                                right: { "id": 67109568, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                bottom: { "id": 67109568, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                            });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create(selectItem.getImage());
                            Image.height(ResourceUtil.getCommonImgSize()[1]);
                            Image.width(ResourceUtil.getCommonImgSize()[1]);
                            Image.visibility(selectItem.getImage() === null ? Visibility.None : Visibility.Visible);
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(selectItem.getName());
                            Text.fontColor(selectIndex === 0 ? { "id": 67109438, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : Color.Black);
                            Text.fontSize({ "id": 67109569, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Text.textAlign(TextAlign.Center);
                            Text.margin({
                                left: { "id": 67109570, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                                right: { "id": 67109570, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                            });
                        }, Text);
                        Text.pop();
                        Row.pop();
                    };
                    this.forEachUpdateFunction(elmtId, item.getSelectItemList(), forEachItemGenFunction, (selectItem: SelectItem, selectIndex: number) => JSON.stringify(selectItem) + selectIndex, true, true);
                }, ForEach);
                ForEach.pop();
                Flex.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.payCardSelectList, forEachItemGenFunction, (item: SelectProjectItem, index: number) => JSON.stringify(item) + index, true, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.padding({
                top: { "id": 67109732, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                left: { "id": 67109733, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                bottom: { "id": 67109732, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                right: { "id": 67109733, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
            Row.margin({ bottom: { "id": 67109731, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Row.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
            Row.backgroundColor(Color.White);
            Row.width(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109757, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Image.height(ResourceUtil.getCommonImgSize()[5]);
            Image.width(ResourceUtil.getCommonImgSize()[5]);
            Image.margin({ right: { "id": 67109583, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.PAY_INFO(this.context)[2]);
            Text.fontSize({ "id": 67109582, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create();
            Checkbox.selectedColor({ "id": 67109447, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Checkbox.shape(CheckBoxShape.CIRCLE);
            Checkbox.width({ "id": 67109480, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        }, Checkbox);
        Checkbox.pop();
        Row.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(DetailConstants.PAY_INFO(this.context)[3]);
            Button.width(CommonConstants.FULL_PERCENT);
            Button.backgroundColor({ "id": 67109447, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Button.height({ "id": 67109555, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Button.margin({
                top: { "id": 67109557, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                bottom: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? { "id": 67109556, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } :
                    CommonConstants.BOTTOM_RECT_HEIGHT
            });
        }, Button);
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

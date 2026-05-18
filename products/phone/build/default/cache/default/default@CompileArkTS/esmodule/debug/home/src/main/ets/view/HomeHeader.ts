if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HomeHeader_Params {
    currentBreakpoint?: string;
    topRectHeight?: number;
    context?: Context;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, BreakpointType, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/HomeConstants";
export class HomeHeader extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.context = this.getUIContext().getHostContext()!;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HomeHeader_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: HomeHeader_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__topRectHeight.aboutToBeDeleted();
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
    private context: Context;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: BreakpointConstants.GRID_ROW_COLUMNS[0],
                    md: BreakpointConstants.GRID_ROW_COLUMNS[4],
                    lg: BreakpointConstants.GRID_ROW_COLUMNS[2]
                }
            });
            GridRow.padding({ right: ResourceUtil.getPageColPadding().getValue(this.currentBreakpoint) });
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: BreakpointConstants.GRID_COLUMN_SPANS[2],
                    md: BreakpointConstants.GRID_COLUMN_SPANS[6],
                    lg: BreakpointConstants.GRID_COLUMN_SPANS[3]
                }
            });
            GridCol.padding({
                top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight
            });
            GridCol.height(deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? CommonConstants.TAB_BAR_HEIGHT :
                CommonConstants.TAB_BAR_HEIGHT + this.topRectHeight);
        }, GridCol);
        this.TopTabBar.bind(this)();
        GridCol.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: BreakpointConstants.GRID_COLUMN_SPANS[2],
                    md: BreakpointConstants.GRID_COLUMN_SPANS[2],
                    lg: BreakpointConstants.GRID_COLUMN_SPANS[2]
                }
            });
            GridCol.padding({ top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM || deviceInfo.deviceType ===
                    CommonConstants.DEVICE_TYPES[0] ? 0 : this.topRectHeight });
            GridCol.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM || deviceInfo.deviceType ===
                CommonConstants.DEVICE_TYPES[0] ? CommonConstants.TAB_BAR_HEIGHT : CommonConstants.TAB_BAR_HEIGHT +
                this.topRectHeight);
        }, GridCol);
        this.SearchBar.bind(this)();
        GridCol.pop();
        GridRow.pop();
        Column.pop();
    }
    TopTabBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: new BreakpointType(HomeConstants.HOME_HEADER_LIST_SPACES[0], HomeConstants.HOME_HEADER_LIST_SPACES[1], HomeConstants.HOME_HEADER_LIST_SPACES[2]).getValue(this.currentBreakpoint) });
            List.scrollBar(BarState.Off);
            List.alignListItem(ListItemAlign.Center);
            List.listDirection(Axis.Horizontal);
            List.padding({
                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109248, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : 0,
                right: new BreakpointType({ "id": 67109251, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109250, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109249, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint)
            });
            List.width(CommonConstants.FULL_PERCENT);
            List.height(CommonConstants.FULL_PERCENT);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.layoutWeight(1);
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.fontSize(index === 0 ? { "id": 67109246, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109242, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Text.lineHeight(index === 0 ? { "id": 67109247, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109244, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                            Text.fontWeight(index === 0 ? CommonConstants.FONT_WEIGHT_500 : FontWeight.Normal);
                            Text.fontColor(index === 0 ? Color.Black : { "id": 67109027, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                        }, Text);
                        Text.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, HomeConstants.TOP_BAR_TEXTS(this.context), forEachItemGenFunction, (item: string, index: number) => item + index, true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
    }
    SearchBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.Center);
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Start });
            Stack.alignSelf(ItemAlign.Center);
            Stack.layoutWeight(1);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: HomeConstants.SEARCH_PLACEHOLDER(this.context) });
            TextInput.placeholderFont({
                size: { "id": 67109182, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                weight: FontWeight.Normal
            });
            TextInput.placeholderColor({ "id": 67109028, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            TextInput.height({ "id": 67109183, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            TextInput.fontSize({ "id": 67109182, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            TextInput.padding({
                left: { "id": 67109184, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                right: { "id": 67109185, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
            });
            TextInput.width(CommonConstants.FULL_PERCENT);
            TextInput.enableKeyboardOnFocus(false);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Search image.
            Image.create({ "id": 67109309, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            // Search image.
            Image.width({ "id": 67109181, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            // Search image.
            Image.height({ "id": 67109181, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            // Search image.
            Image.margin({ left: { "id": 67109178, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Image);
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Scan image.
            Image.create({ "id": 67109308, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            // Scan image.
            Image.width(ResourceUtil.getCommonImgSize()[0]);
            // Scan image.
            Image.height(ResourceUtil.getCommonImgSize()[0]);
            // Scan image.
            Image.margin({ left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109180, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109179, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Message image.
            Image.create({ "id": 67109306, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            // Message image.
            Image.width(ResourceUtil.getCommonImgSize()[0]);
            // Message image.
            Image.height(ResourceUtil.getCommonImgSize()[0]);
            // Message image.
            Image.margin({ left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 67109180, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : { "id": 67109179, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

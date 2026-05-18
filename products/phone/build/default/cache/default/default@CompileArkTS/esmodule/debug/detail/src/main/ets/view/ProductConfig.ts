if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface AllComments_Params {
    currentBreakpoint?: string;
    context?: Context;
}
interface UserComments_Params {
    currentBreakpoint?: string;
    isShowingSidebar?: boolean;
    context?: Context;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, BreakpointType, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { DetailConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/DetailConstants";
import { CommentContentExtra, CommentsContent, CommentsTitle, ConfigTipIcon, ConfigTipText, ProductsConfigText, RightArrow, UserCommentInfo } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/view/CommonView";
export function ProductConfig(pageBreakpoint: string, context: Context = this.getUIContext().getHostContext()!, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.alignItems(HorizontalAlign.Start);
        Column.backgroundColor(Color.White);
        Column.width(CommonConstants.FULL_PERCENT);
        Column.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
        Column.padding({ top: { "id": 67109644, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        Column.margin({ bottom: new BreakpointType({ "id": 67109648, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109647, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109646, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(pageBreakpoint) });
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.width(CommonConstants.FULL_PERCENT);
        Column.padding({
            left: { "id": 67109648, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            right: { "id": 67109648, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.alignItems(VerticalAlign.Top);
        Row.margin({ bottom: { "id": 67109644, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, Row);
    ProductsConfigText.bind(this)(DetailConstants.PRODUCT_CONFIG_NAMES(context)[0], { "id": 67109644, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.layoutWeight(1);
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.width(CommonConstants.FULL_PERCENT);
        Row.margin({ bottom: { "id": 67109645, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, Row);
    ProductsConfigText.bind(this)(DetailConstants.PRODUCT_CONFIG_NAMES(context)[1]);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Blank.create();
    }, Blank);
    Blank.pop();
    RightArrow.bind(this)();
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        List.create({ space: DetailConstants.PRODUCT_CONFIG_LIST_SPACE });
        List.listDirection(Axis.Horizontal);
        List.width(CommonConstants.FULL_PERCENT);
        List.margin({ bottom: { "id": 67109645, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, List);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        ForEach.create();
        const forEachItemGenFunction = _item => {
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
                };
                const deepRenderFunction = (elmtId, isInitialRender) => {
                    itemCreation(elmtId, isInitialRender);
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(item);
                        Image.width(ResourceUtil.getCommonImgSize()[2]);
                        Image.height(ResourceUtil.getCommonImgSize()[2]);
                    }, Image);
                    ListItem.pop();
                };
                this.observeComponentCreation2(itemCreation2, ListItem);
                ListItem.pop();
            }
        };
        (parent ? parent : this).forEachUpdateFunction(elmtId, DetailConstants.PRODUCT_COLOR_SELECTION, forEachItemGenFunction, (item: Resource, index: number) => JSON.stringify(item) + index, false, true);
    }, ForEach);
    ForEach.pop();
    List.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Divider.create();
        Divider.width(CommonConstants.FULL_PERCENT);
        Divider.strokeWidth(1);
        Divider.color({ "id": 67109422, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
    }, Divider);
    Column.pop();
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.alignItems(VerticalAlign.Top);
        Row.margin({ bottom: { "id": 67109644, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.width({ "id": 67109500, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Column.height({ "id": 67109499, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Column.margin({ right: { "id": 67109644, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, Column);
    ProductsConfigText.bind(this)(DetailConstants.PRODUCT_CONFIG_NAMES(context)[2]);
    ProductsConfigText.bind(this)(DetailConstants.PRODUCT_CONFIG_NAMES(context)[3]);
    Column.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.layoutWeight(1);
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.width(CommonConstants.FULL_PERCENT);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        List.create({ space: DetailConstants.PRODUCT_CONFIG_LIST_SPACE });
        List.scrollBar(BarState.Off);
        List.listDirection(Axis.Horizontal);
        List.layoutWeight(1);
        List.margin({ bottom: { "id": 67109645, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, List);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        ForEach.create();
        const forEachItemGenFunction = _item => {
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
                };
                const deepRenderFunction = (elmtId, isInitialRender) => {
                    itemCreation(elmtId, isInitialRender);
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(item);
                        Image.width(ResourceUtil.getCommonImgSize()[2]);
                        Image.height(ResourceUtil.getCommonImgSize()[2]);
                    }, Image);
                    ListItem.pop();
                };
                this.observeComponentCreation2(itemCreation2, ListItem);
                ListItem.pop();
            }
        };
        (parent ? parent : this).forEachUpdateFunction(elmtId, DetailConstants.RECOMMENDED_CONFIG_PRODUCTS, forEachItemGenFunction, (item: Resource, index: number) => JSON.stringify(item) + index, false, true);
    }, ForEach);
    ForEach.pop();
    List.pop();
    RightArrow.bind(this)();
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Divider.create();
        Divider.width(CommonConstants.FULL_PERCENT);
        Divider.strokeWidth(1);
        Divider.color({ "id": 67109422, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
    }, Divider);
    Column.pop();
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.width(CommonConstants.FULL_PERCENT);
        Row.margin({ bottom: { "id": 67109644, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, Row);
    ProductsConfigText.bind(this)(DetailConstants.PRODUCT_CONFIG_NAMES(context)[4], { "id": 67109644, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
    ProductsConfigText.bind(this)(DetailConstants.PRODUCT_CONFIG_NAMES(context)[5]);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Blank.create();
    }, Blank);
    Blank.pop();
    RightArrow.bind(this)();
    Row.pop();
    Column.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Scroll.create();
        Scroll.align(Alignment.Start);
        Scroll.scrollBar(BarState.Off);
        Scroll.scrollable(ScrollDirection.Horizontal);
        Scroll.width(CommonConstants.FULL_PERCENT);
        Scroll.backgroundColor({ "id": 67109421, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Scroll.height({ "id": 67109503, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Scroll.padding({
            left: { "id": 67109648, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            right: { "id": 67109648, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Scroll);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.height(CommonConstants.FULL_PERCENT);
        Row.width(CommonConstants.FULL_PERCENT);
    }, Row);
    ConfigTipIcon.bind(this)();
    ConfigTipText.bind(this)(DetailConstants.PRODUCT_CONFIG_NAMES(context)[6], 0, { "id": 67109644, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
    ConfigTipIcon.bind(this)();
    ConfigTipText.bind(this)(DetailConstants.PRODUCT_CONFIG_NAMES(context)[7], 1);
    Row.pop();
    Scroll.pop();
    Column.pop();
}
export class UserComments extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__isShowingSidebar = this.createStorageLink('isShowingSidebar', false, "isShowingSidebar");
        this.context = this.getUIContext().getHostContext()!;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: UserComments_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: UserComments_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowingSidebar.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isShowingSidebar.aboutToBeDeleted();
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
    private __isShowingSidebar: ObservedPropertyAbstractPU<boolean>;
    get isShowingSidebar() {
        return this.__isShowingSidebar.get();
    }
    set isShowingSidebar(newValue: boolean) {
        this.__isShowingSidebar.set(newValue);
    }
    private context: Context;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(Color.White);
            Column.alignItems(HorizontalAlign.Start);
            Column.width(CommonConstants.FULL_PERCENT);
            Column.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
            Column.padding({ "id": 67109718, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 67109720, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
            Row.margin({ bottom: { "id": 67109494, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Row);
        CommentsTitle.bind(this)(1);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.USER_COMMENT_NAMES(this.context)[6]);
            Text.fontSize({ "id": 67109448, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.lineHeight({ "id": 67109449, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.opacity(CommonConstants.TEXT_OPACITY[2]);
            Text.margin({ right: { "id": 67109450, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            Text.onClick(() => {
                if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) {
                    this.isShowingSidebar = true;
                }
            });
            Text.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Visibility.Visible :
                Visibility.None);
        }, Text);
        Text.pop();
        RightArrow.bind(this)(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Visibility.Visible :
            Visibility.None);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.align(Alignment.Start);
            Scroll.width(CommonConstants.FULL_PERCENT);
            Scroll.scrollable(ScrollDirection.Horizontal);
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        CommentsTag.bind(this)(DetailConstants.USER_COMMENT_NAMES(this.context)[1]);
        CommentsTag.bind(this)(DetailConstants.USER_COMMENT_NAMES(this.context)[2]);
        CommentsTag.bind(this)(DetailConstants.USER_COMMENT_NAMES(this.context)[3]);
        Row.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        UserCommentInfo.bind(this)();
        CommentsContent.bind(this)();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class AllComments extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.context = this.getUIContext().getHostContext()!;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AllComments_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: AllComments_Params) {
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.width(CommonConstants.FULL_PERCENT);
            Scroll.layoutWeight(1);
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(Color.White);
            Column.alignItems(HorizontalAlign.Start);
            Column.width(CommonConstants.FULL_PERCENT);
            Column.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
            Column.padding({ "id": 67109718, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            Column.margin({ bottom: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 :
                    CommonConstants.BOTTOM_RECT_HEIGHT });
        }, Column);
        CommentsTitle.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.align(Alignment.Start);
            Scroll.scrollable(ScrollDirection.Horizontal);
            Scroll.scrollBar(BarState.Off);
            Scroll.width(CommonConstants.FULL_PERCENT);
            Scroll.margin({ top: { "id": 67109494, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        CommentsTag.bind(this)(DetailConstants.USER_COMMENT_NAMES(this.context)[1]);
        CommentsTag.bind(this)(DetailConstants.USER_COMMENT_NAMES(this.context)[2]);
        CommentsTag.bind(this)(DetailConstants.USER_COMMENT_NAMES(this.context)[3]);
        Row.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                UserCommentInfo.bind(this)();
                CommentsContent.bind(this)();
                CommentContentExtra.bind(this)();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (item < CommonConstants.TWO) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Divider.create();
                                Divider.width(CommonConstants.FULL_PERCENT);
                                Divider.strokeWidth(1);
                                Divider.color({ "id": 67109422, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                                Divider.margin({ top: { "id": 67109494, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                            }, Divider);
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
            };
            this.forEachUpdateFunction(elmtId, DetailConstants.COMMENTS_LIST, forEachItemGenFunction, (item: number, index: number) => index + JSON.stringify(item), false, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function CommentsTag(tagText: string = '', parent = null) {
    const __tagText__ = tagText;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, tagText = __tagText__) => {
        Row.create();
        Row.margin({ right: { "id": 67109709, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
        Row.padding({
            left: { "id": 67109710, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            right: { "id": 67109710, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
        Row.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
        Row.height({ "id": 67109711, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Row.backgroundColor({ "id": 67109445, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, tagText = __tagText__) => {
        Text.create(tagText);
        Text.fontSize({ "id": 67109708, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
    }, Text);
    Text.pop();
    Row.pop();
}

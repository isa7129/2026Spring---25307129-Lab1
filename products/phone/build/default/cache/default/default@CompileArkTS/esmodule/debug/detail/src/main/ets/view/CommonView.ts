if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface UtilIcon_Params {
    currentBreakpoint?: string;
    isShowingSidebar?: boolean;
    isMoreDetail?: boolean;
    iconImg?: Resource;
}
import { BreakpointConstants, BreakpointType, CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { DetailConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/DetailConstants";
export function ProductsConfigText(configText: string = '', marginRight?: ResourceStr, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(configText);
        Text.fontSize({ "id": 67109642, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.lineHeight({ "id": 67109643, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.margin({
            right: marginRight ?? 0
        });
    }, Text);
    Text.pop();
}
export function RightArrow(visibility: Visibility = Visibility.Visible, parent = null) {
    const __visibility__ = visibility;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, visibility = __visibility__) => {
        Image.create(ResourceUtil.getArrowRight());
        Image.width({ "id": 67109651, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Image.height({ "id": 67109650, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Image.visibility(visibility);
    }, Image);
}
export function ConfigTipIcon(parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Image.create({ "id": 67109746, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Image.width({ "id": 67109502, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Image.height({ "id": 67109502, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Image.borderRadius(ResourceUtil.getCommonBorderRadius()[2]);
        Image.opacity(CommonConstants.TEXT_OPACITY[1]);
        Image.margin({ right: { "id": 67109501, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, Image);
}
export function ConfigTipText(tipText: string = '', layoutWeight?: number, marginRight?: ResourceStr, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(tipText);
        Text.opacity(CommonConstants.TEXT_OPACITY[2]);
        Text.fontSize({ "id": 67109504, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.maxLines(1);
        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
        Text.layoutWeight(layoutWeight ?? 0);
        Text.margin({
            right: marginRight ?? 0
        });
    }, Text);
    Text.pop();
}
export class UtilIcon extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__isShowingSidebar = this.createStorageLink('isShowingSidebar', false, "isShowingSidebar");
        this.__isMoreDetail = new SynchedPropertySimpleTwoWayPU(params.isMoreDetail, this, "isMoreDetail");
        this.iconImg = { "id": 67109329, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: UtilIcon_Params) {
        if (params.iconImg !== undefined) {
            this.iconImg = params.iconImg;
        }
    }
    updateStateVars(params: UtilIcon_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowingSidebar.purgeDependencyOnElmtId(rmElmtId);
        this.__isMoreDetail.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isShowingSidebar.aboutToBeDeleted();
        this.__isMoreDetail.aboutToBeDeleted();
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
    private __isMoreDetail: SynchedPropertySimpleTwoWayPU<boolean>;
    get isMoreDetail() {
        return this.__isMoreDetail.get();
    }
    set isMoreDetail(newValue: boolean) {
        this.__isMoreDetail.set(newValue);
    }
    public iconImg: Resource;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.Center);
            Row.width(this.isShowingSidebar ? { "id": 67109728, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } : (this.isMoreDetail ?
                new BreakpointType({ "id": 67109729, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109728, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109725, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint) :
                new BreakpointType({ "id": 67109727, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109726, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, { "id": 67109724, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }).getValue(this.currentBreakpoint)));
            Row.height(CommonConstants.TAB_BAR_HEIGHT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.iconImg);
            Image.width(ResourceUtil.getCommonImgSize()[0]);
            Image.height(ResourceUtil.getCommonImgSize()[0]);
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export function DetailTopIcon(imageResource: Resource = { "id": 67109735, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }, onClick?: () => void, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Image.create(imageResource);
        Image.width(ResourceUtil.getCommonImgSize()[1]);
        Image.height(ResourceUtil.getCommonImgSize()[1]);
        Image.onClick(onClick);
    }, Image);
}
export function CommentsTitle(layoutWeight: number = 0, context: Context = this.getUIContext().getHostContext()!, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(DetailConstants.USER_COMMENT_NAMES(context)[0]);
        Text.fontSize({ "id": 67109719, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.lineHeight({ "id": 67109720, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
    }, Text);
    Text.pop();
}
export function UserCommentInfo(context: Context = this.getUIContext().getHostContext()!, parent = null) {
    const __context__ = context;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, context = __context__) => {
        Row.create();
        Row.height({ "id": 67109497, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Row.margin({
            top: { "id": 67109493, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            bottom: { "id": 67109498, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, context = __context__) => {
        Image.create({ "id": 67109792, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Image.width(ResourceUtil.getCommonImgSize()[2]);
        Image.height(ResourceUtil.getCommonImgSize()[2]);
        Image.margin({ right: { "id": 67109492, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, Image);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, context = __context__) => {
        Column.create();
        Column.justifyContent(FlexAlign.SpaceBetween);
        Column.height(CommonConstants.FULL_PERCENT);
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, context = __context__) => {
        Text.create(DetailConstants.USER_COMMENT_NAMES(context)[4]);
        Text.fontSize({ "id": 67109495, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.lineHeight({ "id": 67109496, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, context = __context__) => {
        Rating.create({ rating: CommonConstants.FIVE, indicator: false });
        Rating.stars(CommonConstants.FIVE);
        Rating.stepSize(1);
        Rating.height({ "id": 67109649, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
    }, Rating);
    Rating.pop();
    Column.pop();
    Row.pop();
}
export function CommentsContent(context: Context = this.getUIContext().getHostContext()!, parent = null) {
    const __context__ = context;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, context = __context__) => {
        Text.create(DetailConstants.USER_COMMENT_NAMES(context)[5]);
        Text.fontSize({ "id": 67109489, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.lineHeight({ "id": 67109490, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
    }, Text);
    Text.pop();
}
export function CommentContentExtra(context: Context = this.getUIContext().getHostContext()!, parent = null) {
    const __context__ = context;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, context = __context__) => {
        Column.create();
        Column.width(CommonConstants.FULL_PERCENT);
        Column.alignItems(HorizontalAlign.Start);
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, context = __context__) => {
        Image.create({ "id": 67109734, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Image.width(CommonConstants.FULL_PERCENT);
        Image.height({ "id": 67109482, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Image.aspectRatio(1);
        Image.borderRadius(ResourceUtil.getCommonBorderRadius()[6]);
        Image.padding({
            top: { "id": 67109710, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            bottom: { "id": 67109710, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Image);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, context = __context__) => {
        Text.create(DetailConstants.USER_COMMENT_NAMES(context)[7]);
        Text.opacity(CommonConstants.TEXT_OPACITY[2]);
        Text.fontSize({ "id": 67109481, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
    }, Text);
    Text.pop();
    Column.pop();
}

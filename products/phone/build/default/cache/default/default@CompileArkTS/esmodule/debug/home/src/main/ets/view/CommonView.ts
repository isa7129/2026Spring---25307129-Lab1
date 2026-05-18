import { CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/HomeConstants";
export function HomeButton(buttonText: string = '', parent = null) {
    const __buttonText__ = buttonText;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, buttonText = __buttonText__) => {
        Button.createWithLabel(buttonText);
        Button.backgroundColor({ "id": 67109013, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Button.borderRadius(ResourceUtil.getCommonBorderRadius()[5]);
        Button.height({ "id": 67109072, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Button.width({ "id": 67109073, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Button.fontColor(Color.White);
        Button.fontSize({ "id": 67109071, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Button.fontWeight(CommonConstants.FONT_WEIGHT_500);
    }, Button);
    Button.pop();
}
export function TitleView(titleText: string = '', context: Context = this.getUIContext().getHostContext()!, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.width(CommonConstants.FULL_PERCENT);
        Row.height({ "id": 67109237, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Row.padding({
            left: { "id": 67109241, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            right: { "id": 67109241, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(titleText);
        Text.fontSize({ "id": 67109236, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.lineHeight({ "id": 67109238, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Blank.create();
    }, Blank);
    Blank.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(HomeConstants.TIP_TEXTS(context)[1]);
        Text.fontSize({ "id": 67109239, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.lineHeight({ "id": 67109240, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.opacity(CommonConstants.TEXT_OPACITY[2]);
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Image.create(ResourceUtil.getArrowRight());
        Image.width(ResourceUtil.getCommonImgSize()[0]);
        Image.height(ResourceUtil.getCommonImgSize()[0]);
    }, Image);
    Row.pop();
}
export function ProductTitle(title: string[] = [], isCenter: boolean = true, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.justifyContent(isCenter ? FlexAlign.Center : FlexAlign.Start);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        If.create();
        if (title.length !== 1) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(title[1]);
                    Text.lineHeight({ "id": 67109211, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.fontSize({ "id": 67109214, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.fontColor(Color.White);
                    Text.fontWeight(FontWeight.Normal);
                    Text.linearGradient({
                        direction: GradientDirection.Right,
                        repeating: false,
                        colors: [[HomeConstants.GRADIENT_COLORS[2], 0.0], [HomeConstants.GRADIENT_COLORS[3], 1.0]]
                    });
                    Text.backgroundColor({ "id": 67109032, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.borderRadius(ResourceUtil.getCommonBorderRadius()[1]);
                    Text.textAlign(TextAlign.Center);
                    Text.padding({
                        left: { "id": 67109213, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                        right: { "id": 67109213, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                    });
                    Text.margin({ right: { "id": 67109212, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                }, Text);
                Text.pop();
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(title[0]);
        Text.fontSize({ "id": 67109216, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.lineHeight({ "id": 67109215, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        Text.maxLines(1);
        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
        Text.layoutWeight(isCenter ? 0 : 1);
    }, Text);
    Text.pop();
    Row.pop();
}
export function ProductInfo(info: string = '', parent = null) {
    const __info__ = info;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, info = __info__) => {
        If.create();
        if (info === '') {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, info = __info__) => {
                    Blank.create();
                    Blank.height({ "id": 67109202, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                }, Blank);
                Blank.pop();
            });
        }
        else {
            (parent ? parent : this).ifElseBranchUpdateFunction(1, () => {
                (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, info = __info__) => {
                    Text.create(info);
                    Text.fontSize({ "id": 67109204, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.lineHeight({ "id": 67109202, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.fontWeight(FontWeight.Normal);
                    Text.maxLines(1);
                    Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                    Text.opacity(CommonConstants.TEXT_OPACITY[1]);
                    Text.margin({ top: { "id": 67109203, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                }, Text);
                Text.pop();
            });
        }
    }, If);
    If.pop();
}
export function ProductPrice(price: string = '', originalPrice: string = '', parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.margin({ top: { "id": 67109209, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(price);
        Text.fontSize({ "id": 67109210, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.lineHeight({ "id": 67109208, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontColor({ "id": 67109031, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        If.create();
        if (originalPrice !== '') {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(originalPrice);
                    Text.fontSize({ "id": 67109174, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.lineHeight({ "id": 67109172, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.fontWeight(FontWeight.Normal);
                    Text.fontColor({ "id": 67109029, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                    Text.decoration({
                        type: TextDecorationType.LineThrough,
                        color: { "id": 67109029, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                    });
                    Text.margin({ left: { "id": 67109173, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                }, Text);
                Text.pop();
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    Row.pop();
}
export function ProductFeature(feature: string[] = [], parent = null) {
    const __feature__ = feature;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, feature = __feature__) => {
        Row.create();
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, feature = __feature__) => {
        ForEach.create();
        const forEachItemGenFunction = _item => {
            const itemStr = _item;
            (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, feature = __feature__) => {
                Text.create(itemStr);
                Text.fontSize({ "id": 67109196, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                Text.lineHeight({ "id": 67109195, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                Text.fontColor({ "id": 67109031, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                Text.fontWeight(FontWeight.Normal);
                Text.maxLines(1);
                Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                Text.padding({
                    left: { "id": 67109194, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                    right: { "id": 67109194, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                });
                Text.margin({
                    top: { "id": 67109193, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                    left: { "id": 67109192, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                });
                Text.border({
                    width: { "id": 67109191, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                    color: { "id": 67109030, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                    radius: { "id": 67109190, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                    style: BorderStyle.Solid
                });
            }, Text);
            Text.pop();
        };
        (parent ? parent : this).forEachUpdateFunction(elmtId, feature, forEachItemGenFunction, (item: string, index: number) => index + JSON.stringify(item), false, true);
    }, ForEach);
    ForEach.pop();
    Row.pop();
}
export function ProductComments(comments: string = '', parent = null) {
    const __comments__ = comments;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, comments = __comments__) => {
        Text.create(comments);
        Text.fontSize({ "id": 67109188, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.lineHeight({ "id": 67109187, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.maxLines(1);
        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
        Text.opacity(CommonConstants.TEXT_OPACITY[1]);
        Text.margin({
            top: { "id": 67109189, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            bottom: { "id": 67109186, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Text);
    Text.pop();
}

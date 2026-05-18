import { CommonConstants, ResourceUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { ShoppingBagConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/ShoppingBagConstants";
import { ShoppingBagListViewModel } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/ShoppingBagListViewModel";
import type { ShoppingBagProduct } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/viewmodel/ShoppingBagListViewModel";
export function ShoppingCardItem(shoppingBagProductItem: ShoppingBagProduct = new ShoppingBagListViewModel(this.context).getShoppingBagItemData()[2], titleEllipsis?: boolean, context: Context = this.getUIContext().getHostContext()!, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.width(CommonConstants.FULL_PERCENT);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.alignItems(HorizontalAlign.Start);
        Column.layoutWeight(1);
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Image.create(shoppingBagProductItem.getImage());
        Image.width(ResourceUtil.getCommonImgSize()[7]);
        Image.height(ResourceUtil.getCommonImgSize()[7]);
        Image.border({
            radius: ResourceUtil.getCommonBorderRadius()[3]
        });
    }, Image);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.padding({
            left: { "id": 67109078, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            bottom: { "id": 67109078, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
        Column.layoutWeight(1);
        Column.alignItems(HorizontalAlign.Start);
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.margin({
            bottom: { "id": 67109085, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(shoppingBagProductItem.getName());
        Text.fontSize({ "id": 67109079, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
        Text.textOverflow({
            overflow: TextOverflow.Ellipsis
        });
        Text.maxLines(titleEllipsis === true ? 1 : 2);
    }, Text);
    Text.pop();
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.backgroundColor(ResourceUtil.getCommonBackgroundColor()[2]);
        Row.border({ radius: ResourceUtil.getCommonBorderRadius()[9] });
        Row.padding({
            top: { "id": 67109101, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            bottom: { "id": 67109101, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            left: { "id": 67109099, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            right: { "id": 67109100, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
        Row.margin({
            bottom: { "id": 67109098, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(shoppingBagProductItem.getType());
        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
        Text.maxLines(1);
        Text.fontSize({ "id": 67109084, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontColor({ "id": 67109035, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.margin({
            right: { "id": 67109086, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Image.create({ "id": 67109303, "type": 20000, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Image.width(ResourceUtil.getCommonImgSize()[8]);
        Image.height(ResourceUtil.getCommonImgSize()[8]);
    }, Image);
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.margin({ bottom: { "id": 67109093, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        ForEach.create();
        const forEachItemGenFunction = _item => {
            const item = _item;
            (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                Text.create(item);
                Text.border({
                    color: { "id": 67109033, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                    radius: ResourceUtil.getCommonBorderRadius()[1],
                    width: 1
                });
                Text.fontSize({ "id": 67109080, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                Text.fontColor({ "id": 67109033, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                Text.padding({
                    top: { "id": 67109092, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                    bottom: { "id": 67109092, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                    left: { "id": 67109091, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                    right: { "id": 67109091, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                });
                Text.margin({ right: { "id": 67109090, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
            }, Text);
            Text.pop();
        };
        (parent ? parent : this).forEachUpdateFunction(elmtId, shoppingBagProductItem.getPreferentialList(), forEachItemGenFunction, (item: string, index: number) => item + index, false, true);
    }, ForEach);
    ForEach.pop();
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Flex.create({
            direction: FlexDirection.Row,
            alignItems: ItemAlign.Center,
            wrap: FlexWrap.Wrap
        });
        Flex.width(CommonConstants.FULL_PERCENT);
    }, Flex);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(ShoppingBagConstants.SHOPPING_CARD_NAMES(context)[0]);
        Text.font({
            size: { "id": 67109081, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            weight: CommonConstants.FONT_WEIGHT_500
        });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(JSON.stringify(shoppingBagProductItem.getPrice()));
        Text.font({
            size: { "id": 67109082, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            weight: CommonConstants.FONT_WEIGHT_500
        });
        Text.margin({
            right: { "id": 67109094, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(ShoppingBagConstants.SHOPPING_CARD_NAMES(context)[0] +
            JSON.stringify(shoppingBagProductItem.getOriginalPrice()));
        Text.font({
            size: { "id": 67109083, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
        });
        Text.fontColor({ "id": 67109035, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.decoration({
            type: TextDecorationType.LineThrough,
            color: { "id": 67109035, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
        Text.margin({
            right: { "id": 67109095, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
        Text.visibility(shoppingBagProductItem.getOriginalPrice() === -1 ? Visibility.None :
            Visibility.Visible);
    }, Text);
    Text.pop();
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Blank.create();
    }, Blank);
    Blank.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
    }, Row);
    AddButton.bind(this)(ShoppingBagConstants.SHOPPING_CARD_NAMES(context)[1]);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(ShoppingBagConstants.SHOPPING_CARD_NAMES(context)[2]);
        Text.fontSize({ "id": 67109087, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.width({ "id": 67109089, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.margin({
            left: { "id": 67109088, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            right: { "id": 67109088, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
        Text.textAlign(TextAlign.Center);
    }, Text);
    Text.pop();
    AddButton.bind(this)(ShoppingBagConstants.SHOPPING_CARD_NAMES(context)[3]);
    Row.pop();
    Flex.pop();
    Column.pop();
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.width(CommonConstants.FULL_PERCENT);
        Column.padding({
            left: { "id": 67109076, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.width(CommonConstants.FULL_PERCENT);
        Row.margin({
            top: { "id": 67109075, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            bottom: { "id": 67109074, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(ShoppingBagConstants.SHOPPING_CARD_NAMES(context)[4]);
        Text.fontSize({ "id": 67109081, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.width({ "id": 67109077, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(shoppingBagProductItem.getPresent());
        Text.fontSize({ "id": 67109081, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontColor({ "id": 67109014, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.layoutWeight(1);
        Text.textOverflow({
            overflow: TextOverflow.Ellipsis
        });
        Text.maxLines(1);
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Blank.create();
    }, Blank);
    Blank.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Image.create(ResourceUtil.getArrowRight());
        Image.width(ResourceUtil.getCommonImgSize()[9]);
        Image.height(ResourceUtil.getCommonImgSize()[9]);
    }, Image);
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.width(CommonConstants.FULL_PERCENT);
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(ShoppingBagConstants.SHOPPING_CARD_NAMES(context)[5]);
        Text.fontSize({ "id": 67109081, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.width({ "id": 67109077, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(shoppingBagProductItem.getService());
        Text.fontSize({ "id": 67109081, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.backgroundColor(ResourceUtil.getCommonBackgroundColor()[2]);
        Text.border({ radius: ResourceUtil.getCommonBorderRadius()[1] });
        Text.padding({
            left: { "id": 67109096, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            right: { "id": 67109096, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            top: { "id": 67109097, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            bottom: { "id": 67109097, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Blank.create();
    }, Blank);
    Blank.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Image.create(ResourceUtil.getArrowRight());
        Image.width(ResourceUtil.getCommonImgSize()[9]);
        Image.height(ResourceUtil.getCommonImgSize()[9]);
    }, Image);
    Row.pop();
    Column.pop();
    Column.pop();
    Row.pop();
}
function AddButton(buttonText: string, parent = null) {
    const __buttonText__ = buttonText;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, buttonText = __buttonText__) => {
        Text.create(buttonText);
        Text.width({ "id": 67109040, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.height({ "id": 67109040, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.border({
            radius: ResourceUtil.getCommonBorderRadius()[4],
            width: { "id": 67109039, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
            color: { "id": 67109011, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
        });
        Text.fontColor({ "id": 67109011, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
        Text.textAlign(TextAlign.Center);
    }, Text);
    Text.pop();
}

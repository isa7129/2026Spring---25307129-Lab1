import { BreakpointConstants, BreakpointType } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
import { LiveConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/LiveConstants";
export function Comment(currentBreakpoint: string = BreakpointConstants.BREAKPOINT_LG, context: Context, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.flexGrow(0);
        Column.width(new BreakpointType(LiveConstants.COMMENTS_WIDTH[0], LiveConstants.COMMENTS_WIDTH[1], LiveConstants.COMMENTS_WIDTH[2]).getValue(currentBreakpoint));
        Column.alignItems(HorizontalAlign.Start);
        Column.alignSelf(currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? ItemAlign.End : ItemAlign.Start);
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        ForEach.create();
        const forEachItemGenFunction = (_item, index: number) => {
            const item = _item;
            (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                Row.create();
                Row.flexGrow(0);
                Row.justifyContent(FlexAlign.Start);
                Row.alignItems(VerticalAlign.Top);
                Row.margin({ bottom: { "id": 67109525, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                Row.border({ radius: { "id": 67109523, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                Row.backgroundColor({ "id": 67109420, "type": 10001, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                Row.padding({
                    left: { "id": 67109527, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                    top: { "id": 67109526, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                    bottom: { "id": 67109526, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" },
                    right: { "id": 67109526, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" }
                });
            }, Row);
            (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                Text.create({ "id": 67109405, "type": 10003, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                Text.fontColor(Color.White);
                Text.fontSize({ "id": 67109524, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                Text.linearGradient({
                    angle: 0,
                    direction: GradientDirection.Left,
                    colors: [['#CF0A2C', 0], ['#FF6354', 1]]
                });
                Text.border({ radius: { "id": 67109548, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                Text.padding({ "id": 67109550, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                Text.margin({ right: { "id": 67109549, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" } });
                Text.visibility(index === 0 ? Visibility.Visible : Visibility.None);
            }, Text);
            Text.pop();
            (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                Text.create(item);
                Text.layoutWeight(new BreakpointType(LiveConstants.COMMENTS_WIDTH[0], LiveConstants.COMMENTS_WIDTH[1], LiveConstants.COMMENTS_WIDTH[2]).getValue(currentBreakpoint));
                Text.fontColor(Color.White);
                Text.lineHeight({ "id": 67109491, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
                Text.fontSize({ "id": 67109524, "type": 10002, params: [], "bundleName": "com.huawei.multishoppingpricecomparison", "moduleName": "phone" });
            }, Text);
            Text.pop();
            Row.pop();
        };
        (parent ? parent : this).forEachUpdateFunction(elmtId, LiveConstants.LIVE_COMMENTS_LIST(context), forEachItemGenFunction, (item: string, index: number) => item + index, true, true);
    }, ForEach);
    ForEach.pop();
    Column.pop();
}

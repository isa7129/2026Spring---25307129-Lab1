import { HomeConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/HomeConstants";
export class FooterTabViewModel {
    private tabList: FooterTab[] = [];
    constructor(context: Context) {
        HomeConstants.FOOTER_TOPIC_LIST(context).forEach((item: string, index: number) => {
            this.tabList.push(new FooterTab(item, HomeConstants.FOOTER_TOPIC_ICONS[index], HomeConstants.FOOTER_TOPIC_ICONS_SELECTED[index]));
        });
    }
    getTabList(): FooterTab[] {
        return this.tabList;
    }
}
export class FooterTab {
    /**
     * Name of the tab.
     */
    private name: string;
    /**
     * Icon of the tab.
     */
    private icon: Resource;
    /**
     * Icon selected.
     */
    private iconSelected: Resource;
    constructor(name: string, icon: Resource, iconSelected: Resource) {
        this.name = name;
        this.icon = icon;
        this.iconSelected = iconSelected;
    }
    getName(): string {
        return this.name;
    }
    getIcon(): Resource {
        return this.icon;
    }
    getIconSelected(): Resource {
        return this.iconSelected;
    }
}

import { HomeConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/HomeConstants";
export class IconInfoViewModel {
    private categoryList: IconInfo[] = [];
    private welfareList: IconInfo[] = [];
    constructor(context: Context) {
        HomeConstants.GOOD_CATEGORIES(context).forEach((item: string, index: number) => {
            this.categoryList.push(new IconInfo(item, HomeConstants.GOOD_CATEGORY_IMG[index]));
        });
        HomeConstants.WELFARE_PRODUCTS.forEach((item: string, index: number) => {
            this.welfareList.push(new IconInfo(this.makeUpPrice(item, context), HomeConstants.WELFARE_PRODUCT_IMG[index]));
        });
    }
    getCategoryList(): IconInfo[] {
        return this.categoryList;
    }
    makeUpPrice(price: string, context: Context): string {
        return HomeConstants.PRICE_UNIT(context)[0] + price + HomeConstants.PRICE_UNIT(context)[1];
    }
    getWelfareList(): IconInfo[] {
        return this.welfareList;
    }
}
export class IconInfo {
    /**
     * Info of the icon.
     */
    private info: string;
    /**
     * Icon image.
     */
    private icon: Resource;
    constructor(info: string, icon: Resource) {
        this.info = info;
        this.icon = icon;
    }
    getInfo(): string {
        return this.info;
    }
    getIcon(): Resource {
        return this.icon;
    }
}

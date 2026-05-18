import { ClassifyConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/ClassifyConstants";
export class ShopListViewModel {
    private shopList: Array<ShopListItem> = [];
    constructor(context: Context) {
        ClassifyConstants.SHOP_MATRIX.forEach((item: Array<string>, index: number) => {
            let shopItemList: Array<ShopItem> = [];
            item.forEach((item: string, itemIndex: number) => {
                shopItemList.push(new ShopItem(item, ClassifyConstants.SHOP_MATRIX_IMAGE[index][itemIndex]));
            });
            this.shopList.push(new ShopListItem(ClassifyConstants.SHOP_TITLE_LIST(context)[index], shopItemList));
        });
    }
    getShopList(): Array<ShopListItem> {
        return this.shopList;
    }
}
export class ShopItem {
    /**
     * Name of the tab.
     */
    private name: string;
    /**
     * Icon of the tab.
     */
    private image: Resource;
    constructor(name: string, image: Resource) {
        this.name = name;
        this.image = image;
    }
    getName(): string {
        return this.name;
    }
    getImage(): Resource {
        return this.image;
    }
}
export class ShopListItem {
    /**
     * Name of the ShopList.
     */
    private name: string;
    /**
     * List of the ShopList.
     */
    private ShopList: Array<ShopItem>;
    constructor(name: string, ShopList: Array<ShopItem>) {
        this.name = name;
        this.ShopList = ShopList;
    }
    getName(): string {
        return this.name;
    }
    getItem(): Array<ShopItem> {
        return this.ShopList;
    }
}
export class BannerList {
    private bannerList: Array<Resource> = [];
    constructor() {
        ClassifyConstants.BANNER_IMAGE.forEach((item: Resource) => {
            this.bannerList.push(item);
        });
    }
    getBannerList(): Array<Resource> {
        return this.bannerList;
    }
}

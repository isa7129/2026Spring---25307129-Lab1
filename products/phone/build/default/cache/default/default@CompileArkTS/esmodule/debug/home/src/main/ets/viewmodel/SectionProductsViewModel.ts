import { HomeConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/HomeConstants";
export class SectionProductsViewModel {
    private sectionProductList: SectionProduct[] = [];
    private flashSaleProductList: SectionProduct[] = [];
    constructor(context: Context) {
        HomeConstants.SECTION_PRODUCT_IMAGES.forEach((item: Resource, index: number) => {
            this.sectionProductList.push(new SectionProduct(item, HomeConstants.SECTION_PRODUCTS_TITLES(context)[index], HomeConstants.SECTION_PRODUCTS_PRICES[index], HomeConstants.SECTION_PRODUCTS_FEATURES(context)[index], HomeConstants.SECTION_PRODUCTS_COMMENTS(context), HomeConstants.SECTION_PRODUCTS_INFO(context)[index]));
        });
        HomeConstants.FLASH_SALE_PRODUCT_IMAGES.forEach((item: Resource, index: number) => {
            this.flashSaleProductList.push(new SectionProduct(item, HomeConstants.FLASH_SALE_PRODUCT_TITLES(context)[index], HomeConstants.FLASH_SALE_PRODUCT_PRICES[index], HomeConstants.FLASH_SALE_PRODUCT_FEATURES(context)[index], '', HomeConstants.FLASH_SALE_PRODUCT_INFO(context)[index], HomeConstants.FLASH_SALE_PRODUCT_ORIGINAL_PRICES[index]));
        });
    }
    getSectionProductList(): SectionProduct[] {
        return this.sectionProductList;
    }
    getFlashSaleProductList(): SectionProduct[] {
        return this.flashSaleProductList;
    }
}
export class SectionProduct {
    private productImg: Resource;
    private title: string[];
    private price: string;
    private feature: string[];
    private comments: string;
    private info: string;
    private originalPrice?: string;
    constructor(productImg: Resource, title: string[], price: string, feature: string[], comments: string, info: string, originalPrice?: string) {
        this.productImg = productImg;
        this.title = title;
        this.price = price;
        this.feature = feature;
        this.comments = comments;
        this.info = info;
        if (originalPrice !== undefined) {
            this.originalPrice = originalPrice;
        }
    }
    getProductImg(): Resource {
        return this.productImg;
    }
    getTitle(): string[] {
        return this.title;
    }
    getPrice(): string {
        return this.price;
    }
    getFeature(): string[] {
        return this.feature;
    }
    getComments(): string {
        return this.comments;
    }
    getInfo(): string {
        return this.info;
    }
    getOriginalPrice(): string | undefined {
        return this.originalPrice;
    }
}

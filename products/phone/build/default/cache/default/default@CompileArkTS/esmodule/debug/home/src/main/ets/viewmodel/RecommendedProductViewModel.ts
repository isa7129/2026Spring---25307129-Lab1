import { HomeConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@home/ets/constants/HomeConstants";
export class RecommendedProductViewModel {
    private recommendedProductList: RecommendedProduct[] = [];
    constructor() {
        HomeConstants.RECOMMENDED_PRODUCTS.forEach((item: Resource, index: number) => {
            this.recommendedProductList.push(new RecommendedProduct(item, HomeConstants.RECOMMENDED_PRODUCT_LIVING[index]));
        });
    }
    getRecommendedProductList(): RecommendedProduct[] {
        return this.recommendedProductList;
    }
}
export class RecommendedProduct {
    /**
     * Image of the product.
     */
    private image: Resource;
    /**
     * Whether it is live.
     */
    private isLive: boolean;
    constructor(image: Resource, isLive: boolean) {
        this.image = image;
        this.isLive = isLive;
    }
    getImage(): Resource {
        return this.image;
    }
    getIsLive(): Boolean {
        return this.isLive;
    }
}

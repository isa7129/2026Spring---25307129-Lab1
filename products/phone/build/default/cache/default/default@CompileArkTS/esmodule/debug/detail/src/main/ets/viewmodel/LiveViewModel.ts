import { LiveConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/LiveConstants";
export class LiveViewModel {
    private liveProductList: LiveProduct[] = [];
    constructor() {
        LiveConstants.LIVE_PRODUCT_NAME_LIST.forEach((item: string, index: number) => {
            this.liveProductList.push(new LiveProduct(item, LiveConstants.LIVE_PRODUCT_IMAGE_LIST[index], LiveConstants.LIVE_PRODUCT_PRICE_LIST[index]));
        });
    }
    getProductList(): LiveProduct[] {
        return this.liveProductList;
    }
}
export class LiveProduct {
    private name: string;
    private image: Resource;
    private price: string;
    constructor(name: string, image: Resource, price: string) {
        this.name = name;
        this.image = image;
        this.price = price;
    }
    getName(): string {
        return this.name;
    }
    getImage(): Resource {
        return this.image;
    }
    getPrice(): string {
        return this.price;
    }
}

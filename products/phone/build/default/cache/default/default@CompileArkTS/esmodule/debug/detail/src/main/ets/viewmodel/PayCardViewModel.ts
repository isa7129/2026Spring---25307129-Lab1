import { DetailConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@detail/ets/constants/DetailConstants";
export class PayCardViewModel {
    private payCardSelectList: SelectProjectItem[] = [];
    constructor(context: Context) {
        let selectListTmp: SelectItem[][] = [];
        let selectListItemTmp: SelectItem[] = [];
        DetailConstants.COLOR_SELECT_NAME_LIST(context).forEach((item: string, index: number) => {
            selectListItemTmp.push(new SelectItem(item, DetailConstants.COLOR_SELECT_IMAGE_LIST[index]));
        });
        selectListTmp.push(selectListItemTmp);
        selectListItemTmp = [];
        DetailConstants.CAPACITY_SELECT_NAME_LIST.forEach((item: string) => {
            selectListItemTmp.push(new SelectItem(item, null));
        });
        selectListTmp.push(selectListItemTmp);
        selectListItemTmp = [];
        DetailConstants.TYPE_SELECT_NAME_LIST(context).forEach((item: string) => {
            selectListItemTmp.push(new SelectItem(item, null));
        });
        selectListTmp.push(selectListItemTmp);
        selectListItemTmp = [];
        DetailConstants.SELECT_NAME_LIST(context).forEach((item: string, index: number) => {
            this.payCardSelectList.push(new SelectProjectItem(item, selectListTmp[index]));
        });
    }
    getPayCardSelectList(): SelectProjectItem[] {
        return this.payCardSelectList;
    }
}
export class SelectProjectItem {
    private name: string;
    private selectItemList: SelectItem[];
    constructor(name: string, selectItemList: SelectItem[]) {
        this.name = name;
        this.selectItemList = selectItemList;
    }
    getName(): string {
        return this.name;
    }
    getSelectItemList(): SelectItem[] {
        return this.selectItemList;
    }
}
export class SelectItem {
    private name: string;
    private image: Resource | null;
    constructor(name: string, image: Resource | null) {
        this.name = name;
        this.image = image;
    }
    getName(): string {
        return this.name;
    }
    getImage(): Resource | null {
        return this.image;
    }
}

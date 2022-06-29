import { ItemToBuy } from "./menuTobuy";

export class Stock{
    protected name : string;
    protected address : string;
    protected items : ItemToBuy[]=[];
    constructor(name : string, address : string, items : ItemToBuy){
        this.name = name;
        this.address = address;
    }
    addItem(item : ItemToBuy){
        this.items.push(item);
    }
    findTotalPrice(){
        let totalAmount:number = 0;
        for(let item of this.items){
            totalAmount += item.getPrice();
        }
        return totalAmount;
    }
}
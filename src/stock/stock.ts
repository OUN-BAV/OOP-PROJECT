import { Item } from "./menuTobuy";

export class Stock{
    protected name : string;
    protected address : string;
    protected items : Item[]=[];
    constructor(name : string, address : string){
        this.name = name;
        this.address = address;
    }
    addItem(item : Item){
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
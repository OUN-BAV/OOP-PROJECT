import { ItemCategory } from "./categoryItem";

export class ItemToBuy{
    constructor(protected name: string,protected price: number,protected category:ItemCategory){};
    getPrice(){
        return this.price;
    }
}
import { ItemCategory } from "./categoryItem";

export class Item{
    constructor(protected name: string,protected price: number,protected category:ItemCategory){};
    getPrice(){
        return this.price;
    }
}
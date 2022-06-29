import { MenuItem } from "./Item";

export enum DrinkCategory {
    BEER = 'Beer',
    WINE = 'Wine',
    JUICE = 'JuIce',
}
export class Drink extends MenuItem{
    constructor(name: string,
        price: number,
        category: DrinkCategory)
    {
        super(name, price, category);
    }
    getPrice(): number {
        return this.price; ;
    }
    getName(): string {
        return this.name;
    }
 
}
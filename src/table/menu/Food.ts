import {  MenuItem } from "./Item";

export enum FoodCategory{
    SEA_FOOD = 'Sea Food',
    TRADITIONAL_FOOD = 'Traditional Food',
    FRANCE_FOOD = 'France Food',
}

export class Food extends MenuItem {
    constructor(name: string, 
        price: number,
        category: FoodCategory)
    {
        super(name,price,category);
    }
    getPrice(): number {
        return this.price;
    }
    getName(): string {
        return this.name;
    }
}
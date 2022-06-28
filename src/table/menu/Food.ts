




export enum FoodCategory{
    SEA_FOOD = 'Sea Food',
    TRADITIONAL_FOOD = 'Traditional Food',
    FRANCE_FOOD = 'France Food',
}

export class Food{
    protected name: FoodCategory;
    protected price: number;
    constructor(name: FoodCategory, price: number){
        this.name = name;
        this.price = price;
    }
    getPrice():number {
        return this.price;
    }
}
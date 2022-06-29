import { DrinkCategory } from "./Drink";
import { FoodCategory } from "./Food";

export abstract class MenuItem{
    constructor(
        protected name: string, 
        protected price: number,
        protected category: FoodCategory|DrinkCategory){};
    abstract getPrice(): number;
}
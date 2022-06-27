import { Drink } from "./menu/Drink";
import { Food } from "./menu/Food";

export class Order{
    constructor(private drinks : Drink[] = [], private Foods : Food[] = []){};
    addDrink(drink: Drink){
        this.drinks.push(drink);
    }
    addFood(food: Food){
        this.Foods.push(food);
    }
}

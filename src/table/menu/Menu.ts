import { Food } from "./Food";
import { Drink } from "./Drink";

/**
 * Menu contains a list of foods and drinks
 */
export class Menu{
    private food: Food [] = [];
    private drink: Drink [] = [];

    getFood(){
        return this.food;
    }

    addFood(food: Food){
        this.food.push(food);
    }
    getDrink(){
        return this.drink;
    }

    addDrink(drink: Drink){
        this.drink.push(drink);
    }
}
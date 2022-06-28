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
    getTotalPrice(){
        let totalPrice : number = 0;
        for(let food of this.Foods){
           totalPrice += food.getPrice();
        }
    }
}

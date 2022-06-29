import { DateTime } from "../calendar/DateTime";
import { Customer } from "../human/customer";
import { Drink } from "./menu/Drink";
import { Food } from "./menu/Food";

export class Order{
    public customer: Customer;
    constructor(private drinks : Drink[] = [], 
        private Foods : Food[] = [],
        public orderDate : DateTime){};
    setCustomer(customer: Customer){
        this.customer = customer;
    }
    addDrink(drink: Drink){
        this.drinks.push(drink);
    }
    addFood(food: Food){
        this.Foods.push(food);
    }
    getFoodPrice(foodName: string):number|undefined{
        for (let foodItem of  this.Foods){
            if (foodItem.getName()===foodName){
                return foodItem.getPrice();
            }
        }
        return undefined;
    }
    getDrinkPrice(drinkName: string):number|undefined{
        for (let drinkItem of  this.drinks){
            if (drinkItem.getName()===drinkName){
                return drinkItem.getPrice();
            }
        }
        return undefined;
    }
    getAllPrice(){
        let allPrice: number = 0;
        for(let food of this.Foods){
            allPrice += food.getPrice();
        }
        for(let drink of this.drinks){
            allPrice += drink.getPrice();
        }
        return allPrice;
    }
}

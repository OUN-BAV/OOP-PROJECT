import { DateTime } from "./calendar/DateTime";
import { DayOff } from "./calendar/DayOff";
import { EvenCategory } from "./calendar/Event";
import { Customer } from "./human/customer";
import { Restaurant } from "./Restaurant";
import { Gender } from "./human/gender_and_stuffCotegory/Gender";
import { Chef } from "./human/staff/Chef";
import { Waiter } from "./human/staff/Waiter";
import { Table } from "./table/table";
import { Order } from "./table/Order";
import { Drink } from "./table/menu/Drink";
import {DrinkCategory} from "./table/menu/Drink"
import { Food, FoodCategory } from "./table/menu/Food";
import { ItemCategory } from "./stock/categoryItem";
import { Item } from "./stock/menuTobuy";
import { Stock } from "./stock/stock";
import { Pay } from "./payment/pay";

let restaurant = new Restaurant('Oun Star Making','Takeo');

let orderDate = new DateTime (1,29,6,2022)
let payDate = new DateTime (1,30,6,2022)
let daySart = new DateTime(8,28,6,2022)
let dayEnd = new DateTime(8,29,6,2022)
let internationalCeremony = new DayOff(daySart, dayEnd,EvenCategory.INTERNATIONALCEREMONY)


let lidaCostomer = new Customer('thy lida','0976345222',Gender.FEMALE);
let soklimCostomer = new Customer('soklim hin','0976345222',Gender.MALE);
let ounChef = new Chef('Oun','0888165154',500,Gender.MALE);
let samoulWaiter = new Waiter('samoul vann','012 34 56 789',200,Gender.MALE);

let beer = new Drink('Haknuman',4000,DrinkCategory.BEER);
let orangJuice = new Drink('Haknuman',4000,DrinkCategory.JUICE);

let seaFood = new Food('susaki',30,FoodCategory.SEA_FOOD);
let franceFood = new Food('spakity',50,FoodCategory.FRANCE_FOOD);
let order1 = new Order(orderDate);
let order2 = new Order(orderDate);

let onion = new Item('onion',200,ItemCategory.VEGETABLED) ;
let OrangJuice = new Item('orangJuice',200,ItemCategory.DRINK);
let pork = new Item('pork',200,ItemCategory.MEAT);

let firstStock = new Stock('Oun Products','Takeo',)

let pay1 = new Pay(soklimCostomer,payDate);

firstStock.addItem(onion);
firstStock.addItem(OrangJuice);
firstStock.addItem(pork);

order1.addDrink(beer);
order2.addDrink(orangJuice);
order1.addFood(seaFood);
order2.addFood(franceFood);

soklimCostomer.addOrder(order1);
lidaCostomer.addOrder(order2);

let table1 = new Table(1);
table1.addCustomer(soklimCostomer);
table1.addCustomer(lidaCostomer); 

restaurant.HolidayDate.addEvent(internationalCeremony);
restaurant.hr.addCustomer(lidaCostomer);
restaurant.hr.addCustomer(soklimCostomer);
restaurant.hr.addStaff(ounChef);
restaurant.hr.addStaff(samoulWaiter);
restaurant.stock.setStock(firstStock);
restaurant.pay.setPay(pay1);

console.log(restaurant);



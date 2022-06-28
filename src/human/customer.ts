import { Order } from "../table/Order";
import { Gender } from "./gender_and_stuffCotegory/Gender";
import { Person } from "./persons";

/**
 *  customer is a persons
 */
export class Customer extends Person{
    public orders : Order[]=[];
    constructor(name: string, phone:string,gender:Gender){
        super(name, phone, gender);
    }
    addOrder(order: Order){
        this.orders.push(order);
    }
    getOrder(){
        return this.orders;
    }
}
import { Customer } from "../human/customer";
import { Order } from "../table/Order";

export class Orderlist {
    constructor ( protected orders : Order[] = []){};
    priceForPay(customer: Customer):number{
        let amount : number = 0;
        for(let order of this.orders){
            if (order.customer=== customer){
                amount += order.getAllPrice();
            }
        }
        return amount;
    }
}
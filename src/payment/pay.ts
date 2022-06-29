import { DateTime } from "../calendar/DateTime";
import { Customer } from "../human/customer";
export class Pay {
    customer: Customer;
    payDate:DateTime;
    constructor(customer:Customer,payDate:DateTime) {
        this.customer = customer;
        this.payDate = payDate;
    }
    priceForPay():number{
        let amount : number = 0;
        for(let order of this.customer.getOrder() ){ 
                amount += order.getAllPrice();
        }
        return amount;
    }
}
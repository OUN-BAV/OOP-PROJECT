import { Customer } from "../human/customer";

/**
 *  On chair can contains customer and canot customer
 */
enum ChairCategory{
    WOOD = 'Wood',
    STEEL = 'Steel',
    RESIN = 'Resin',
}
export class Chair{
    protected customer?: Customer;
    protected chairCategory:ChairCategory;
    constructor(customer: Customer,chairCategory:ChairCategory){
        this.customer = customer;
        this.chairCategory =chairCategory;
    }
    hasCustomer():boolean{
        return this.customer !== undefined;
    }
}
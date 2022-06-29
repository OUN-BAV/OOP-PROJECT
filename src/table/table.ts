import { Customer } from "../human/customer";

/**
 * On table contain Id and customer
 */
export class Table {
    private table_id: number;
    private customers : Customer[]=[];
    constructor(table_id: number){
        this.table_id = table_id;
    }
    addCustomer(customer: Customer){
        this.customers.push(customer);
    }
    getTableID(){
        return this.table_id;
    }


}
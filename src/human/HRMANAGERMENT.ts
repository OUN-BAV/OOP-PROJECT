import { Customer } from "./customer";
import { Staff } from "./staff/Staff";

/**
 * HRmanagerment contains many customer and many staff
 */
export class HRmanagerment{
    protected customer: Customer[] = [];
    protected staff: Staff[] = [];

    addCustomer(customer: Customer){
        this.customer.push(customer);
    }
    addStaff(staff: Staff){
        this.staff.push(staff);
    }
}
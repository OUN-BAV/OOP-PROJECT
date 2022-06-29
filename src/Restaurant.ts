import { CalendaManagerment } from "./calendar/CalendarManagerment";
import { HRmanagerment } from "./human/HRMANAGERMENT";
import { PaymentService } from "./payment/payment";
import { Stockmanagement } from "./stock/stockmanagement";
import { ManageTable } from "./table/TableManagerment";

/**
 * in restaurant contains a stock, human, paymant and table
 */
export class Restaurant{
    protected name: string;
    protected address: string;
    public HolidayDate : CalendaManagerment = new CalendaManagerment();
    public hr :HRmanagerment = new HRmanagerment();
    public pay :PaymentService = new PaymentService();
    public stock :Stockmanagement = new Stockmanagement();
    public table :ManageTable = new ManageTable();
    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }
}
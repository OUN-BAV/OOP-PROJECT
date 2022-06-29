import { Pay } from "./pay";
/**
 * payment service constants a pay
 */
export class PaymentService {
    public pays:Pay;
    setPay(pay:Pay){
        this.pays = pay;
    }
}
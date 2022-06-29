import { Pay } from "./pay";

export class PaymentService {
    public pays:Pay;
    setPay(pay:Pay){
        this.pays = pay;
    }
}
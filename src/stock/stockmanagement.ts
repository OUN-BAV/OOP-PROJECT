import { Stock } from "./stock";

export class Stockmanagement {
    protected stock : Stock;
    setStock(newStock:Stock){
        this.stock= newStock;
    }
}
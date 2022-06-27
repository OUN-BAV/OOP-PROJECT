import { Chair } from "./Chair";
import{Menu} from "./menu/Menu";

/**
 * On table contain Id of table, number of chair
 * menu and order
 */
export class Table {
    protected table_id: number;
    protected number_of_chair: number;
    protected menu: Menu;
    protected chair: Chair [] = [];

    constructor(table_id: number, number_of_chair: number,menu:Menu){
        this.table_id = table_id;
        this.number_of_chair = number_of_chair;
        this.menu = menu;
    }

    addChair(chair: Chair){
        if(this.chair.length < this.number_of_chair){
            this.chair.push(chair);
        }
    }
}
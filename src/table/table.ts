import { Chair } from "./Chair";
import{Menu} from "./menu/Menu";

/**
 * On table contain Id of table, number of chair
 * menu and order
 */
export class Table {
    private table_id: number;
    private number_of_chair: number;
    protected menu: Menu;
    private chairs: Chair [] = [];

    constructor(table_id: number, number_of_chair: number,menu:Menu){
        this.table_id = table_id;
        this.number_of_chair = number_of_chair;
        this.menu = menu;
    }

    addChair(chair: Chair){
        if(this.chairs.length < this.number_of_chair){
            this.chairs.push(chair);
        }
    }
    getChair(){
        return this.chairs;
    }


}
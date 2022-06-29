import { Table } from "./table";

export class Room {
    public tables: Table[]=[];

    getNumberOfTable(){
        return this.tables.length;
    }
    addTable(table: Table){
        this.tables.push(table);
    }
    
}


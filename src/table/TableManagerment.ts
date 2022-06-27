import { Table } from "./table";

export class Room {
    public tables: Table[]=[];

    getNumberOfTable(){
        return this.tables.length;
    }
    addTable(table: Table){
        this.tables.push(table);
    }
    findFreeTable():Table|undefined{
        for(let table of this.tables){
            for(let chair of table.getChair()){
                if(! chair.hasCustomer()){
                    return table;
                }
            }
        }
        return undefined;
    }
}


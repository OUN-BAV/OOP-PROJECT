import { Person } from "./persons";
export class Customer extends Person{
    constructor(name: string, phone:string){
        super(name, phone);
    }
}
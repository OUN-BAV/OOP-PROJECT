import { Person } from "../persons";

/**
 * Staff is a persons
 */
export abstract class Staff extends Person{
    protected salary: number;

    constructor(name: string, phone:string,salary:number){
        super(name, phone);
        this.salary = salary;  
    }
}
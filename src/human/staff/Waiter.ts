import { Gender } from "../gender_and_stuffCotegory/Gender";
import { StuffCotegory } from "../gender_and_stuffCotegory/stuffCategory";
import { Staff } from "./Staff";

/**
 * a waiter is a staff
 */
export class Waiter extends Staff{
    constructor(name: string, phone:string,salary:number,gender:Gender) {
        super(name, phone,salary,gender, StuffCotegory.WAIT); 
    } 
    getSalary(){
        return this.salary;
    }
}
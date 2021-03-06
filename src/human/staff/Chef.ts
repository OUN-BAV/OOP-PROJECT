import { Gender } from "../gender_and_stuffCotegory/Gender";
import { StuffCotegory } from "../gender_and_stuffCotegory/stuffCategory";
import { Staff } from "./Staff";

/**
 *  a chef is a staff 
 * and stuffCotegory 
 */
export class Chef extends Staff {
    constructor(name: string, phone:string,salary:number,gender:Gender, ) {
        super(name, phone,salary,gender, StuffCotegory.COOK); 
    } 
    getSalary(){
        return this.salary;
    }
}
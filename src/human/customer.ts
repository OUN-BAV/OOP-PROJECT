import { Gender } from "./gender_and_skill/Gender";
import { Person } from "./persons";

/**
 *  customer is a persons
 */
export class Customer extends Person{
    constructor(name: string, phone:string,gender:Gender){
        super(name, phone,gender);
    }
}
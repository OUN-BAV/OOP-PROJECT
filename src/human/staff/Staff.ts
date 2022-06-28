import { Gender } from "../gender_and_stuffCotegory/Gender";
import { StuffCotegory } from "../gender_and_stuffCotegory/stuffCategory";
import { Person } from "../persons";

/**
 * Staff is a persons contains salary and skill
 */
export abstract class Staff extends Person{
    protected salary: number;
    protected skill: StuffCotegory;
    constructor(name: string, phone:string,salary:number,gender:Gender,skill:StuffCotegory){
        super(name, phone,gender);
        this.salary = salary;
        this.skill = skill;  
    }
}
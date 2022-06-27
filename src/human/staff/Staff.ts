import { Gender } from "../gender_and_skill/Gender";
import { Skill } from "../gender_and_skill/Skill";
import { Person } from "../persons";

/**
 * Staff is a persons contains salary and skill
 */
export abstract class Staff extends Person{
    protected salary: number;
    protected skill: Skill;
    constructor(name: string, phone:string,salary:number,gender:Gender,skill:Skill){
        super(name, phone,gender);
        this.salary = salary;
        this.skill = skill;  
    }
}
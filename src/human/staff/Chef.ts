import { Skill } from "../gender_and_skill/Skill";
import { Staff } from "./Staff";

/**
 *  a chef is a staff 
 * and a chef has a skill
 */
export class Chef extends Staff {
    protected skill : Skill;

    constructor(name: string, phone:string,salary:number, skill: Skill) {
        super(name, phone,salary);
        this.skill = skill;  
    } 
}
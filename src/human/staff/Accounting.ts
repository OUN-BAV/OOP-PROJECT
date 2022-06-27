import { Gender } from "../gender_and_skill/Gender";
import { Skill } from "../gender_and_skill/Skill";
import { Staff } from "./Staff";

/**
 * accounting is a staff 
 */

export class Accountant extends Staff{
    constructor(
        name: string, phone:string,salary:number,gender:Gender, skill: Skill,) {
        super(name, phone,salary,gender, skill); 
    }
}
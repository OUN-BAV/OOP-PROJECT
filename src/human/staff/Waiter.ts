import { Gender } from "../gender_and_skill/Gender";
import { Skill } from "../gender_and_skill/Skill";
import { Staff } from "./Staff";

/**
 * a waiter is a staff
 */
export class Waiter extends Staff{
    constructor(name: string, phone:string,salary:number,gender:Gender, skill: Skill,) {
        super(name, phone,salary,gender, skill); 
    } 
}
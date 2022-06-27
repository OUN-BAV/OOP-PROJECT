import { Gender } from "./gender_and_skill/Gender";

export abstract class Person{
    protected name: string;
    protected phone: string;
    protected gender : Gender;
    constructor(name: string, phone: string, gender: Gender) {
        this.name = name;
        this.phone = phone;
        this.gender = gender;
    }
}
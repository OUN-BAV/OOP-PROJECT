import { DateTime } from "./DateTime";

export enum EvenCategory{
    KHMERNEWYEAR = 'Khmer new year',
    WEEKEND = 'Weekend',
    INTERNATIONALCEREMONY = 'International Ceremony'
}

export abstract class Event {
    constructor(protected dayStart : DateTime,protected dayEnd : DateTime,protected category :EvenCategory) {};
    getCategory(){
        return this.category;
    }
    
}
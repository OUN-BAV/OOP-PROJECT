import { EvenCategory, Event } from "./Event";

/**
 * in a claendar have many events
 */
export class CalendaManagerment{
    protected events: Event[] = [];

    addEvent(event: Event){
        this.events.push(event);
    }
    getEventforKhmerNewYear(){
        let khmerNewYear = [];
        for(let event of this.events){
            if (event.getCategory()===EvenCategory.KHMERNEWYEAR){
                khmerNewYear.push(event);
            }
        }
        return khmerNewYear;
    }
    getEventforWeekend(){
        let Weekend = [];
        for(let event of this.events){
            if (event.getCategory()===EvenCategory.WEEKEND){
                Weekend.push(event);
            }
        }
        return Weekend;
    }
    getEventforCeremony(){
        let ceremony = [];
        for(let event of this.events){
            if (event.getCategory()===EvenCategory.INTERNATIONALCEREMONY){
                ceremony.push(event);
            }
        }
        return ceremony;
    }
}
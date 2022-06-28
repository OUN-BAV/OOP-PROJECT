import { Event } from "./Event";

/**
 * in a claendar have many events
 */
export class CalendaManagerment{
    protected event: Event[] = [];

    addEvent(event: Event){
        this.event.push(event);
    }
}
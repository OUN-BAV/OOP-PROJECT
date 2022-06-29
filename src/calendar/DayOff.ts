
import { DateTime } from "./DateTime";
import { EvenCategory,Event } from "./Event";
/**
 * day off contains start day, end day and eventCategory,
 */
export class DayOff extends Event{
    constructor(dayStart : DateTime,dayEnd : DateTime,category:EvenCategory){
        super(dayStart,dayEnd,category)
    }
}

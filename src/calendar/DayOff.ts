

import { DateTime } from "./DateTime";
import { EvenCategory,Event } from "./Event";
export class DayOff extends Event{
    constructor(dayStart : DateTime,dayEnd : DateTime,category:EvenCategory){
        super(dayStart,dayEnd,category)
    }
}

import { Injectable } from '@angular/core';
export class Event {
    constructor(public id: number,
                public name: string) { }
}
let EVENTS = [
    new Event(099, 'DataGrid'),
    new Event(199, 'COre'),
    new Event(299, 'Max'),
    new Event(399, 'Minn'),
    new Event(599, 'AutoCAd'),
    new Event(699, 'filling')
];
let eventsPromise = Promise.resolve(EVENTS);
@Injectable()
export class EventService {
    getEvents() { return eventsPromise; }
    getEvent(id: number | string) {
        return eventsPromise
            .then(events => events.filter(event => event.id === +id)[0]);
    }
}

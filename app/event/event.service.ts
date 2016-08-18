import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Http, Headers} from "@angular/http";
export class Event {
    constructor(
   public id : string,
   public title: string,
   public description: string,
   public startDate: string,
   public endDate: string,
   public startTime:string,
   public endTime:string,
   public location:string,
   public shareWith:string,
   public createdAt:string,
   public updatedAt: string) { }
}
let EVENTS = [
    new Event('099', 'DataGrid','','','','','','','','',''),
];
let eventsPromise = Promise.resolve(EVENTS);
@Injectable()
export class EventService {
    constructor(private http: Http) {}

    public getEvents() : Observable<Event[]>{
        let projectsPath = 'http://127.0.0.1:8081/wireup/projects';
        let heroes = this.http.get(projectsPath, {headers: this.getHeaders()})
            .map(res => <Event[]> res.json())
            .catch(this.handleError);
        return heroes;
    }
    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
    private handleError (error: any) {
        let errorMsg = error.message || ` Problem in Projects retrieving`
        console.error(errorMsg);
        return Observable.throw(errorMsg);
    }

    getEvent(id: number | string) {
        return eventsPromise
            .then(events => events.filter(event => event.id == id)[0]);
    }
}

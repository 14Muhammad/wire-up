import {Component, OnInit, ViewChild}   from '@angular/core';
import { Router }              from '@angular/router';
import {DxDataGrid, DxButton, DxToolbar, DxScheduler} from "devextreme-angular2";
import {EventService, Event} from "./event.service";
@Component({
    templateUrl:'app/event/event-list.component.html',
    styleUrls:['app/event/event-list.component.css'],
    providers: [EventService],
    directives: [DxDataGrid,DxButton,DxToolbar,DxScheduler]
})
export class EventListComponent implements OnInit {
    events: Event[];
    constructor(
        private router: Router,
        private service: EventService) {

    }

    ngOnInit() {
        this.service.getEvents().then(events => this.events = events);
    }
    onSelect(event: Event) {
        this.router.navigate(['/event', event.id]);
    }

    

}


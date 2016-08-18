import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import {EventService, Event} from "./event.service";
@Component({
    template: `
  <h2>Events</h2>
  <div *ngIf="event">
    <h3>"{{event.name}}"</h3>
    <div>
      <label>Id: </label>{{event.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="event.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="goToEvents()">Back</button>
    </p>
  </div>
  `,
    providers: [EventService]
})
export class EventDetailComponent implements OnInit, OnDestroy  {
    event: Event;
    private sub: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EventService) {

    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id']; // (+) converts string 'id' to a number
            this.service.getEvent(id).then(event => this.event = event);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goToEvents() { this.router.navigate(['/events']); }
}

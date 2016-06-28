import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import {AuthService} from "../auth.service";
import {MessageService, Message} from "./message.service";
@Component({
    template: `
  <h2>Clients</h2>
  <div *ngIf="message">
    <h3>"{{message.subject}}"</h3>
    <div>
      <label>Id: </label>{{message.id}}</div>
    <div>
      <label>Subject: </label>
      <input [(ngModel)]="message.subject" placeholder="name"/>
    </div>
    <div>
      <label>Description: </label>
      <input [(ngModel)]="message.description" placeholder="Description"/>
    </div>
    <p>
      <button (click)="gotoMessages()">Back</button>
    </p>
  </div>
  `,
    providers: [MessageService]
})
export class MessageDetailComponent implements OnInit, OnDestroy  {
    message: Message;
    private sub: any;
    constructor(
        public authService: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        private service: MessageService) {
        if (!this.authService.isLoggedIn)
            this.router.navigate(['/login']);
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getMessage(id).then(message => this.message = message);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    gotoMessages() { this.router.navigate(['/messages']); }
}

import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import {MessageService, Message} from "./message.service";
@Component({
    template: `
    <h2>MESSAGES</h2>
    <ul class="messages">
      <li *ngFor="let message of messages"
        (click)="onSelect(message)">
        <span class="badge">{{message.id}}</span> {{message.subject}}
      </li>
    </ul>
  `,
    providers: [MessageService]
})
export class MessageListComponent implements OnInit {
    messages: Message[];
    constructor(
        private router: Router,
        private service: MessageService) {

    }
    ngOnInit() {
        this.service.getMessages().then(messages => this.messages = messages);
    }
    onSelect(message: Message) {
        this.router.navigate(['/message', message.id]);
    }
}

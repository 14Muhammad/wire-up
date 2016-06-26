// TODO SOMEDAY: Feature Componetized like HeroCenter
import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { Client, ClientService }   from './client.service';
import {AuthService} from "../auth.service";
@Component({
    template: `
    <h2>CLIENTS</h2>
    <ul class="items">
      <li *ngFor="let client of clients"
        (click)="onSelect(client)">
        <span class="badge">{{client.id}}</span> {{client.name}}
      </li>
    </ul>
  `,
    providers: [ClientService]
})
export class ClientListComponent implements OnInit {
    clients: Client[];
    constructor(
        public authService: AuthService,
        private router: Router,
        private service: ClientService) {
        if (!this.authService.isLoggedIn)
            this.router.navigate(['/login']);
    }
    ngOnInit() {
        this.service.getClients().then(clients => this.clients = clients);
    }
    onSelect(hero: Client) {
        this.router.navigate(['/client', hero.id]);
    }
}

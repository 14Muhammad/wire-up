import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { Client, ClientService } from './client.service';
@Component({
    template: `
  <h2>Clients</h2>
  <div *ngIf="client">
    <h3>"{{client.name}}"</h3>
    <div>
      <label>Id: </label>{{client.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="client.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoClients()">Back</button>
    </p>
  </div>
  `,
    providers: [ClientService]
})
export class ClientDetailComponent implements OnInit, OnDestroy  {
    client: Client;
    private sub: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ClientService) {}
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getClient(id).then(client => this.client = client);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    gotoClients() { this.router.navigate(['/clients']); }
}

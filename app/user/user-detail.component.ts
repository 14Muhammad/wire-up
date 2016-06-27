import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { User, UserService } from './user.service';

@Component({
  template: `
  <h2>Users</h2>
  <div *ngIf="user">
    <h3>"{{user.name}}"</h3>
    <div>
      <label>Id: </label>{{user.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="user.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoUsers()">Back</button>
    </p>
  </div>
  `,
  providers:[UserService]
})
export class UserDetailComponent implements OnInit, OnDestroy  {
  user: User;

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.service.getUser(id).then(user => this.user = user);
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoUsers() {
    let userId = this.user ? this.user.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['/users'], { queryParams: { id: `${userId}`, foo: 'foo' } });
  }
}

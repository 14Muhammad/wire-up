import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { User, UserService }   from './user.service';
import {AuthService} from "../auth.service";

@Component({
  template: `
    <h2>Users</h2>
    <ul class="items">
      <li *ngFor="let user of users"
        [class.selected]="isSelected(user)"
        (click)="onSelect(user)">
        <span class="badge">{{user.id}}</span> {{user.name}}
      </li>
    </ul>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers:[UserService]
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];

  private selectedId: number;
  private sub: any;
  constructor(private service: UserService, public authService: AuthService, public router: Router){
    if (!this.authService.isLoggedIn)
      this.router.navigate(['/login']);
  }


  ngOnInit() {
    this.sub = this.router
      .routerState
      .queryParams
      .subscribe(params => {
        this.selectedId = +params['id'];
        this.service.getUsers()
          .then(users => this.users = users);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isSelected(user: User) { return user.id === this.selectedId; }

  onSelect(user: User) {
    this.router.navigate(['/user', user.id]);
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
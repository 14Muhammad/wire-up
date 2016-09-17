import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import {UserService} from "./user.service";
import {User} from "./user";

@Component({
    template: `
  <h2>Users</h2>
  `,
    providers:[UserService]
})
export class UserDetailComponent implements OnInit, OnDestroy  {
    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
    user: User;

    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: UserService) {}

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import {UserService} from "./user.service";
import {User} from "./user";

@Component({
    templateUrl:'app/user/user-detail.component.html',
    providers:[UserService]
})
export class UserDetailComponent implements OnInit, OnDestroy  {
    user: User;
    userName:string;
    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: UserService) {

    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.userName = params['id']; // (+) converts string 'id' to a number
            //this.service.getMessage(id).then(message => this.message = message);
        });
    }

    ngOnDestroy(): void {
    }




}

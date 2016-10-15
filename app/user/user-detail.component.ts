import {
    Component,
    OnInit,
    OnDestroy,
    trigger,
    state,
    style,
    transition,
    animate} from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import {UserService} from "./user.service";
import {User} from "./user";
import {Observable} from "rxjs/Rx";

@Component({
    templateUrl:'app/user/user-detail.component.html',
    providers:[UserService],
    styles:[`
            :focus {outline:none;}
            ::-moz-focus-inner {border:0;}
        `],
    animations: [

        ]
})
export class UserDetailComponent implements OnInit, OnDestroy  {
    user: User;
    userName:string;

    projects:number;
    hours:number;

    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: UserService) {

    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.userName = params['id'];
            this.service.getUser(this.userName)
                .subscribe(user => this.user = user);
        });

        Observable.interval(100)
            .take(10).map((x) => x+1)
            .subscribe((x) => {
                this.projects = x;
                this.hours = x*3/2;
            });
    }

    ngOnDestroy(): void {
    }

}

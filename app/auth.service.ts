import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {User} from "./user/user";
import {Http} from "@angular/http";
import {UserService} from "./user/user.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

    isLoggedIn: boolean = false;

    constructor(private http: Http,
                public router: Router,
                public userService:UserService){

    }

    login(user: User) {
        return this.userService.login(user);
    }

    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('loggedUser');
    }
}

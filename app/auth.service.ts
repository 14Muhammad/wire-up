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
        this.userService.login(user)
            .subscribe(response => {
                /**
                 * @param response              Information about the object.
                 * @param response.isLoggedIn   Information about the object's members.
                 */
                if(response.isLoggedIn){
                    this.isLoggedIn = true
                    localStorage.setItem('loggedUser', JSON.stringify(user));
                    this.router.navigate(['/dashboard']);
                }
                else{
                    this.router.navigate(['/login']);
                }
            });
    }

    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('loggedUser');
    }
}

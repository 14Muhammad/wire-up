import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';
import {MdButton} from "@angular2-material/button/button";

import {MdInput} from "@angular2-material/input/input";
import {MdToolbar} from "@angular2-material/toolbar/toolbar";
import {FORM_DIRECTIVES, FORM_PROVIDERS} from "@angular/forms";
import { NgForm }    from '@angular/common';
import {Login} from "./login";
import {MdRipple} from "@angular2-material/core";

@Component({
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css'],
    directives: [MdButton,MdRipple,MdToolbar,MdInput]
})
export class LoginComponent {
    message: string;

    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }
    email: string;
    password: string;
    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in ...';
        if(this.email == 'admin@demo.com' && this.password=='admin')
            this.authService.login().subscribe(() => {
                this.setMessage();
                if (this.authService.isLoggedIn) {
                    console.log("[isLoggedIn] ===>  " + this.authService.isLoggedIn);
                    // Todo: capture where the user was going and nav there.
                    // Meanwhile redirect the user to the crisis admin
                    this.router.navigate(['/dashboard']);
                }
            });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }

    goToResetPassword(){
        this.router.navigate(['/reset-password']);
    }
    goToSignup(){
        this.router.navigate(['/signup']);
    }

    model = new Login('ali@yahoo.com','');
    onSubmit() { 
        
    }

}

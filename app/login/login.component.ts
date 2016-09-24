import {Component, OnInit}   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';
import {Login} from "./login";
import {Validators, FormGroup, FormBuilder} from "@angular/forms";

@Component({
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css'],
    directives: []
})
export class LoginComponent implements OnInit{
    loginForm: FormGroup;
    constructor(public authService: AuthService,
                private formBuilder:FormBuilder,
                public router: Router) {

    }
    ngOnInit():any {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]],
            password: ['', Validators.required]
        });
        this.loginForm.valueChanges
            .subscribe((data: any) => {
                    console.log("valueChanges")
                    console.info(data)
                }
            );
    }

    login() {
        this.authService.login(this.loginForm.value)
            /*.subscribe(() => {
                if (this.authService.isLoggedIn) {
                    console.log("[isLoggedIn] ===>  " + this.authService.isLoggedIn);
                    // Todo: capture where the user was going and nav there.
                    // Meanwhile redirect the user to the crisis admin
                    this.router.navigate(['/dashboard']);
                }
            });*/
    }

    logout() {
        this.authService.logout();
    }

    goToResetPassword(){
        this.router.navigate(['/reset-password']);
    }
    goToSignup(){
        this.router.navigate(['/signup']);
    }


}

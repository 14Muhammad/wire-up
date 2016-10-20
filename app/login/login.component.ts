import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {Component, OnInit}   from '@angular/core';
import { Router }      from '@angular/router';

import { AuthService } from '../auth.service';
@Component({
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css']
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
                    console.info(this.loginForm)
                }
            );
    }

    login() {
        this.authService.login(this.loginForm.value)
            .subscribe(response => {
                /**
                 * @param response              Information about the object.
                 * @param response.isLoggedIn   Information about the object's members.
                 */
                if(response.isLoggedIn){
                    this.authService.isLoggedIn = true;
                    localStorage.setItem('loggedUser', JSON.stringify(this.loginForm.value));
                    localStorage.setItem('loggedUserName', response.userName);
                    this.router.navigate(['/dashboard']);
                }
                else{
                    this.addAlert();
                    this.router.navigate(['/login']);
                }
            });
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

    public alerts:Array<Object> = [

    ];

    public closeAlert(i:number):void {
        this.alerts.splice(i, 1);
    }

    public addAlert():void {
        if(this.alerts.length == 0)
            this.alerts.push({
                msg: 'Authentication failed!',
                type: 'warning',
                closable: true,
                msgIcon: 'fa fa-warning',
                dismissOnTimeout: 3000
            });
    }


}

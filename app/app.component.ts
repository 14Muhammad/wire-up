import { Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {AuthService} from "./auth.service";
import {LoginComponent} from "./login/login.component";
@Component({
    selector: 'wire-app',
    templateUrl:'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers:[],
    precompile : [LoginComponent]
})
export class AppComponent{
    constructor(public authService: AuthService, private router: Router){

    }
}

import { Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {AuthService} from "./auth.service";
import {LoginComponent} from "./login/login.component";
import {HTTP_PROVIDERS} from "@angular/http";
@Component({
    selector: 'wire-app',
    templateUrl:'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers:[HTTP_PROVIDERS],
    precompile : [LoginComponent]
})
export class AppComponent{
    constructor(public authService: AuthService, private router: Router){

    }
}

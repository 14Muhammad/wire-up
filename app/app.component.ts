import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {HeroService} from "./heroes/hero.service";
import {DialogService} from "./dialog.service";
import {AuthService} from "./auth.service";
@Component({
    selector: 'wire-app',
    templateUrl:'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers:[HeroService, DialogService]
})
export class AppComponent {
    constructor(public authService: AuthService, private router: Router){

    }
}

import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./auth.service";
@Component({
    selector: 'wire-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent{
    constructor(public authService: AuthService, private router: Router){

    }
}

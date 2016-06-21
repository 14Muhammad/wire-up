import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
@Component({
    selector: 'wire-app',
    templateUrl:'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    constructor(private router: Router){

    }
}

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {HeroService} from "./heroes/hero.service";
import {DialogService} from "./dialog.service";
import {AuthService} from "./auth.service";
import {SidebarComponent} from "./common/sidebar/sidebar.component";
import {HeaderComponent} from "./common/header/header.component";
import {PageHeadComponent} from "./common/page-head/page-head.component";
@Component({
    selector: 'wire-app',
    templateUrl:'app/app.component.html',
    directives: [ROUTER_DIRECTIVES,SidebarComponent, HeaderComponent, PageHeadComponent],
    providers:[HeroService, DialogService]
})
export class AppComponent {
    constructor(public authService: AuthService, private router: Router){

    }
}

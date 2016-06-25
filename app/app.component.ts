import { Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {HeroService} from "./heroes/hero.service";
import {DialogService} from "./dialog.service";
import {AuthService} from "./auth.service";
import {SidebarComponent} from "./common/sidebar/sidebar.component";
import {HeaderComponent} from "./common/header/header.component";
@Component({
    selector: 'wire-app',
    templateUrl:'app/app.component.html',
    directives: [ROUTER_DIRECTIVES,SidebarComponent, HeaderComponent],
    providers:[HeroService, DialogService]
})
export class AppComponent{
    constructor(public authService: AuthService, private router: Router){
        if (!this.authService.isLoggedIn)
            this.router.navigate(['/login']);

    }
}

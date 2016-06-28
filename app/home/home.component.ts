import { Component }   from '@angular/core';
import {Router, ROUTER_DIRECTIVES}   from '@angular/router';
import {AuthService} from "../auth.service";
import {SidebarComponent} from "../common/sidebar/sidebar.component";
import {HeaderComponent} from "../common/header/header.component";

@Component({
    templateUrl: 'app/home/home.component.html',
    styleUrls: [],
    directives:[ROUTER_DIRECTIVES,SidebarComponent,HeaderComponent],
    providers:[]
})
export class HomeComponent {
    constructor(public authService: AuthService, public router: Router) {
        if (!this.authService.isLoggedIn)
            this.router.navigate(['/login']);
    }

}
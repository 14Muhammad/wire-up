import {Component} from '@angular/core';
import {AuthService} from "../../auth.service";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'sidebar-component',
    templateUrl: 'app/common/sidebar/sidebar.component.html',
    styleUrls:[],
    directives: [ROUTER_DIRECTIVES]
})

export class SidebarComponent {
    constructor(public authService: AuthService, private router: Router){

    }
}
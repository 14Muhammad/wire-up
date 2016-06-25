import {Component} from '@angular/core';
import {AuthService} from "../../auth.service";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav/sidenav";

@Component({
    selector: 'sidebar-component',
    templateUrl: 'app/common/sidebar/sidebar.component.html',
    styleUrls:['app/common/sidebar/sidebar.component.css'],
    directives: [ROUTER_DIRECTIVES,MD_SIDENAV_DIRECTIVES]
})

export class SidebarComponent {
    constructor(public authService: AuthService, private router: Router){

    }

    isActive = false;
    showMenu: string = '';
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
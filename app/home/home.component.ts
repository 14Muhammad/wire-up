import { Component }   from '@angular/core';
import {Router, ROUTER_DIRECTIVES}   from '@angular/router';
import {SidebarComponent} from "../common/sidebar/sidebar.component";
import {HeaderComponent} from "../common/header/header.component";

@Component({
    templateUrl: 'app/home/home.component.html',
    styleUrls: [],
    directives:[ROUTER_DIRECTIVES,SidebarComponent,HeaderComponent],
    providers:[]
})
export class HomeComponent {
    constructor(public router: Router) {
    }

}
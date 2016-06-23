import {Component} from '@angular/core';
import {AuthService} from "../../auth.service";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'page-head-component',
    templateUrl: 'app/common/page-head/page-head.component.html',
    styleUrls:[],
    directives: [ROUTER_DIRECTIVES]
})

export class PageHeadComponent {
    constructor(public authService: AuthService, private router: Router){

    }
}
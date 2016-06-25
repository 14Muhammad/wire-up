import {Component} from '@angular/core';
import {AuthService} from "../../auth.service";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {DROPDOWN_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";

@Component({
    selector: 'header-component',
    templateUrl: 'app/common/header/header.component.html',
    styleUrls:[],
    directives: [ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES]
})

export class HeaderComponent {
    constructor(public authService: AuthService, private router: Router){

    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
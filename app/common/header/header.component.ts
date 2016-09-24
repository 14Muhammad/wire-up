import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {DROPDOWN_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {CORE_DIRECTIVES} from "@angular/common";

@Component({
    selector: 'header-component',
    templateUrl: 'app/common/header/header.component.html',
    styleUrls:[],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, DROPDOWN_DIRECTIVES]
})

export class HeaderComponent implements OnInit {
    ngOnInit(): void {
       this.loggedUser =  JSON.parse(localStorage.getItem('loggedUser')).email;
    }
    constructor(public authService: AuthService, private router: Router){

    }
    loggedUser:string;
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import { Router } from '@angular/router';

@Component({
    selector: 'header-component',
    templateUrl: 'app/common/header/header.component.html',
    styleUrls:[]
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
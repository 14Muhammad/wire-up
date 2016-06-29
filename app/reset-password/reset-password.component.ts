import { Component }   from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../auth.service';
import {MdToolbar} from "@angular2-material/toolbar/toolbar";
import {MdInput} from "@angular2-material/input/input";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MdButton} from "@angular2-material/button/button";

@Component({
    templateUrl: 'app/reset-password/reset-password.component.html',
    styleUrls: ['app/reset-password/reset-password.component.css'],
    directives:[MdButton, MD_CARD_DIRECTIVES, MdInput, MdToolbar]
})
export class ResetPasswordComponent {
    constructor(public authService: AuthService, public router: Router){

    }
    goToLogin(){
        this.router.navigate(['/login']);
    }
}
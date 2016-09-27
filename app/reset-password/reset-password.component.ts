import { Component }   from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../auth.service';
import {FormGroup} from "@angular/forms";


@Component({
    templateUrl: 'app/reset-password/reset-password.component.html',
    styleUrls: ['app/reset-password/reset-password.component.css']
})
export class ResetPasswordComponent {
    constructor(public authService: AuthService, public router: Router){

    }

    resetPasswordForm: FormGroup;
    goToLogin(){
        this.router.navigate(['/login']);
    }

    resetPassword(){

    }
}
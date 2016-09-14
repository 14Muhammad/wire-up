import { Component }   from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
    templateUrl: 'app/reset-password/reset-password.component.html',
    styleUrls: ['app/reset-password/reset-password.component.css']
})
export class ResetPasswordComponent {
    constructor(public authService: AuthService, public router: Router){

    }
    goToLogin(){
        this.router.navigate(['/login']);
    }
}
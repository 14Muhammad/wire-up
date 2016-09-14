import { Component }   from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
    templateUrl: 'app/signup/signup.component.html',
    styleUrls: ['app/signup/signup.component.css']
})
export class SignupComponent {
    message: string;
    constructor(public authService: AuthService, public router: Router) {
        /*this.setMessage();*/
    }
    goToLogin(){
        this.router.navigate(['/login']);}

/*    signup() {
        this.message = 'Trying to sign up ...';

        this.authService.signup().subscribe(() => {
           // this.setMessage();
            if (this.authService.isLoggedIn) {
                console.log("==> " + this.authService.isLoggedIn);

                this.router.navigate(['/crisis-center/admin']);
            }
        });
    }*/

}
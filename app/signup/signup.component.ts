import { Component }   from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../auth.service';
import {MdButton} from "@angular2-material/button/button";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MdInput} from "@angular2-material/input/input";
import {MdToolbar} from "@angular2-material/toolbar/toolbar";
import {MdRadioButton, MD_RADIO_DIRECTIVES, MdRadioGroup, MdUniqueSelectionDispatcher} from "@angular2-material/radio/radio";

@Component({
    templateUrl: 'app/signup/signup.component.html',
    styleUrls: ['app/signup/signup.component.css'],
    directives:[MdButton, MD_CARD_DIRECTIVES, MdInput, MdToolbar
        ,MD_RADIO_DIRECTIVES, MdRadioGroup],
    providers:[MdRadioButton,MdUniqueSelectionDispatcher]
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
import { Component }   from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../auth.service';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";


@Component({
    templateUrl: 'app/reset-password/reset-password.component.html',
    styleUrls: ['app/reset-password/reset-password.component.css']
})
export class ResetPasswordComponent {

    resetPasswordForm: FormGroup;

    constructor(public authService: AuthService,
                private formBuilder:FormBuilder,
                public router: Router){

    }

    ngOnInit():any {
        this.resetPasswordForm = this.formBuilder.group({
            email: ['', [Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]]
        });
        this.resetPasswordForm.valueChanges
            .subscribe((data: any) => {
                    console.log("valueChanges")
                    console.info(data)
                    console.info(this.resetPasswordForm)
                }
            );
    }


    goToLogin(){
        this.router.navigate(['/login']);
    }

    resetPassword(){

    }
}
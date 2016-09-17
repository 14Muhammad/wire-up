import { Component }   from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../auth.service';
import {
    FormGroup,
    FormControl,
    FormBuilder,
    REACTIVE_FORM_DIRECTIVES,
    Validators,
    Validator
} from "@angular/forms";
import {ControlGroup} from "@angular/common";
import { Observable } from "rxjs/Rx";
import {UserService} from "../user/user.service";


@Component({
    templateUrl: 'app/signup/signup.component.html',
    styleUrls: ['app/signup/signup.component.css'],
    providers: [FormBuilder]
})
export class SignupComponent {
    message: string;
    signUpForm: FormGroup;
    genders = [
        'male',
        'female'
    ];
    constructor(public authService: AuthService,
                public userService: UserService,
                public router: Router,
                private formBuilder:FormBuilder) {
        this.signUpForm = formBuilder.group({
            'generalInfo': formBuilder.group({
                'firstName': ['', [Validators.required, this.firstNameValidator]],
                'lastName': ['', Validators.required],
                'gender': ['male']
            }),
            'accountInfo': formBuilder.group({
                'email':['',[
                    Validators.required,
                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ]],
                'passwords': formBuilder.group({
                    'password': ['', [
                        Validators.required,
                        Validators.minLength(6)
                    ]],
                    'confirmPassword': ['', [Validators.required]]
                }, {
                    validator: this.areEqual
                })
            }),
            'companyInfo': formBuilder.group({
                'companyName': ['', Validators.required]
            }),



        });
        /*this.signUpForm.statusChanges.subscribe(
            (data: any) => console.info("Form Status => " + data)
        );
        this.signUpForm.valueChanges.subscribe(
            (data: any) => {
                console.log("valueChanges")
                console.info(data)
            }
        );*/
    }
    areEqual(group: ControlGroup) {
        let val;
        let valid = true;
        for (let name in group.controls) {
            if (val === undefined) {
                val = group.controls[name].value
            } else {
                if (val !== group.controls[name].value) {
                    valid = false;
                    break;
                }
            }
        }
        if (valid)
            return null;
        return {
            areEqual: true
        };
    }
    firstNameValidator(control: FormControl): {[s: string]: boolean} {
        if (control.value === 'abc') {
            return {example: true};
        }
        return null;
    }
    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: ControlGroup): {[key: string]: any} => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    }

    asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>(
            (resolve, reject) => {
                setTimeout(() => {
                    if (control.value === 'Example') {
                        resolve({'invalid': true});
                    } else {
                        resolve(null);
                    }
                }, 1500);
            }
        );
        return promise;
    }
    reset() {
        this.signUpForm.reset();  // will reset to null
        // this.form.reset({first: 'Nancy', last: 'Drew'});   -- will reset to value specified
    }
    onSubmit() {
        var flag : boolean;
        console.info(this.signUpForm);
        this.userService.addUser({
            firstName: this.signUpForm.value.generalInfo.firstName,
            lastName:this.signUpForm.value.generalInfo.lastName,
            gender:this.signUpForm.value.generalInfo.gender,
            companyName:this.signUpForm.value.companyInfo.companyName,
            email:this.signUpForm.value.accountInfo.email,
            password:this.signUpForm.value.accountInfo.passwords.password,
        }).subscribe(flag => flag = flag);;
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
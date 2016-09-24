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
                ],this.asyncEmailValidator(this.userService)],
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
        this.signUpForm.statusChanges.subscribe(
            (data: any) => console.info("Form Status => " + data)
        );
        this.signUpForm.valueChanges
            .debounceTime(600)
            .subscribe((data: any) => {
                    console.log("valueChanges")
                    console.info(data)
                }
            );
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

    asyncEmailValidator (userService : UserService) {
        return (control: FormControl): Promise<any> | Observable<any> => {
            let promise = new Promise<any>(
                (resolve, reject) => {
                    userService.isEmailExists(control.value)
                        .subscribe(response => {
                            /**
                             * @param response              Information about the object.
                             * @param response.isEmailExists   Information about the object's members.
                             */
                            if(response.isEmailExists)
                                resolve({'isEmailExists': true});
                            else
                                resolve(null);
                        });
                });
            return promise;
        }
    }

    reset() {
        this.signUpForm.reset();  // will reset to null
        // this.form.reset({first: 'Nancy', last: 'Drew'});   -- will reset to value specified
    }

    onSubmit() {
        console.info(this.signUpForm);
        var userForm : any = {
            firstName: this.signUpForm.value.generalInfo.firstName,
            lastName:this.signUpForm.value.generalInfo.lastName,
            gender:this.signUpForm.value.generalInfo.gender,
            companyName:this.signUpForm.value.companyInfo.companyName,
            email:this.signUpForm.value.accountInfo.email,
            password:this.signUpForm.value.accountInfo.passwords.password,
        }
        this.userService.addUser(userForm)
            .subscribe(response => {
                /**
                 * @param response              Information about the object.
                 * @param response.isSignedUp   Information about the object's members.
                 */
                if(response.isSignedUp){
                    this.authService.login(userForm);
                }
            });
    }

    goToLogin(){
        this.router.navigate(['/login']);
    }
}
import {
    Component,
    OnInit,
    OnDestroy,
    trigger,
    state,
    style,
    transition,
    animate} from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import {UserService} from "./user.service";
import {User} from "./user";
import {Observable} from "rxjs/Rx";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";

@Component({
    templateUrl:'app/user/user-detail.component.html',
    providers:[UserService],
    styleUrls:['app/user/user-detail.component.css'],
    animations: []
})
export class UserDetailComponent implements OnInit, OnDestroy  {
    user: User;
    userName:string;
    userForm:FormGroup;
    projects:number;
    hours:number;

    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MdSnackBar,
        private formBuilder:FormBuilder,
        private service: UserService) {

    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.userName = params['id'];
            this.service.getUser(this.userName)
                .subscribe(user => {
                    this.user = user;
                    this.userForm.controls['firstName'].setValue(this.user.firstName);
                    this.userForm.controls['lastName'].setValue(this.user.lastName);
                    this.userForm.controls['mailingAddress'].setValue(this.user.mailingAddress);
                    this.userForm.controls['altMailingAddress'].setValue(this.user.altMailingAddress);
                    this.userForm.controls['phone'].setValue(this.user.phone);
                    this.userForm.controls['altPhone'].setValue(this.user.altPhone);
                    this.userForm.controls['skypeId'].setValue(this.user.skypeId);
                    this.userForm.controls['dob'].setValue(this.user.dob);
                    this.userForm.controls['ssn'].setValue(this.user.ssn);
                });
        });

        this.userForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            mailingAddress: ['', []],
            altMailingAddress: ['', []],
            phone: [null, []],
            altPhone: [null, []],
            skypeId: ['', []],
            dob: [null, []],
            ssn: [null, []],
        });

        Observable.interval(100)
            .take(10).map((x) => x+1)
            .subscribe((x) => {
                this.projects = x;
                this.hours = x*3/2;
            });
    }

    ngOnDestroy(): void {
    }

    updateUser(){

        var updateUserData = {
            firstName : this.userForm.controls['firstName'].value,
            lastName : this.userForm.controls['lastName'].value,
            mailingAddress : this.userForm.controls['mailingAddress'].value,
            altMailingAddress : this.userForm.controls['altMailingAddress'].value,
            phone : this.userForm.controls['phone'].value,
            altPhone : this.userForm.controls['altPhone'].value,
            skypeId : this.userForm.controls['skypeId'].value,
            dob : this.userForm.controls['dob'].value,
            ssn : this.userForm.controls['ssn'].value,
    }
        //this.snackBar.open('It didn\'t quite work!', 'Try Again');
        this.service.updateUser(this.user._id,updateUserData)
            .subscribe(response => {
                /**
                 * @param response              Information about the object.
                 * @param response.isUserUpdated   Information about the object's members.
                 */

                if(response.isUserUpdated){
                    this.snackBar.open('User Updated!', 'Congrats');
                }
            });
    }

}

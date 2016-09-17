import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {SignupRouting} from "./signup.routes";
import {SignupComponent} from "./signup.component";

@NgModule({
    imports: [
        RouterModule,
        HttpModule,
        CommonModule,
        FormsModule,
        SignupRouting
    ],
    declarations: [
        SignupComponent
    ],
    providers: [

    ]
})
export class SignupModule { }
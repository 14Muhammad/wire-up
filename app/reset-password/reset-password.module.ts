import { NgModule }      from '@angular/core';
import {MdButtonModule} from "@angular2-material/button";
import {MdInputModule} from "@angular2-material/input";
import {MdToolbarModule} from "@angular2-material/toolbar";
import {MdCardModule} from "@angular2-material/card";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MdProgressBarModule} from "@angular2-material/progress-bar";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {MdRipple, MdRippleModule} from "@angular2-material/core";
import {ResetPasswordRouting} from "./reset-password.routes";
import {ResetPasswordComponent} from "./reset-password.component";

@NgModule({
    imports: [
        MdProgressBarModule,
        RouterModule,
        HttpModule,
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdInputModule,
        MdToolbarModule,
        MdCardModule,
        ResetPasswordRouting,
        MdRippleModule
    ],
    declarations: [
        ResetPasswordComponent,
        MdRipple
    ],
    providers: [

    ]
})
export class ResetPasswordModule { }
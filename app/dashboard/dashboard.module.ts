import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {DashboardRouting} from "./dashboard.routes";

@NgModule({
    imports: [
        RouterModule,
        HttpModule,
        CommonModule,
        FormsModule,
        DashboardRouting
    ],
    declarations: [
    ],
    providers: [

    ]
})
export class DashboardModule { }
import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {HomeRouting} from "./home.routes";

@NgModule({
    imports: [
        RouterModule,
        HttpModule,
        CommonModule,
        FormsModule,
        HomeRouting
    ],
    declarations: [

    ],
    providers: [

    ]
})
export class HomeModule { }
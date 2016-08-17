import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';
import {LoginComponent} from "./login/login.component";
import {AuthService} from "./auth.service";
import {SignupComponent} from "./signup/signup.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {AuthGuard} from "./auth.guard";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        ResetPasswordComponent
    ],
    providers: [
        appRoutingProviders,
        AuthService,
        AuthGuard
    ],
    entryComponents:[

    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
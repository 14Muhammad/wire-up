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
import {HomeComponent} from "./home/home.component";
import {ProjectListComponent} from "./project/project-list.component";
import {ProjectDetailComponent} from "./project/project-detail.component";
import {MessageListComponent} from "./message/message-list.component";
import {MemberListComponent} from "./member/member-list.component";
import {MessageDetailComponent} from "./message/message-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MemberDetailComponent} from "./member/member-detail.component";
import {EventListComponent} from "./event/event-list.component";
import {EventDetailComponent} from "./event/event-detail.component";
import {ClientListComponent} from "./client/client-list.component";
import {ClientDetailComponent} from "./client/client-detail.component";
import {NoteListComponent} from "./note/note-list.component";
import {NoteDetailComponent} from "./note/note-detail.component";
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
        ResetPasswordComponent,
        HomeComponent,
        ProjectListComponent,
        ProjectDetailComponent,
        MessageListComponent,
        MessageDetailComponent,
        MemberListComponent,
        MemberDetailComponent,
        DashboardComponent,
        EventListComponent,
        EventDetailComponent,
        ClientListComponent,
        ClientDetailComponent,
        NoteListComponent,
        NoteDetailComponent
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
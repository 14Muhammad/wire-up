import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {UserListComponent} from "./user/user-list.component";
import {UserDetailComponent} from "./user/user-detail.component";
import {UserService} from "./user/user.service";
import {HeaderComponent} from "./common/header/header.component";
import {SidebarComponent} from "./common/sidebar/sidebar.component";
import {DevExtremeModule} from "devextreme-angular2";
import {Ellipses} from "./common/pipes/ellipses";
import {Ng2BootstrapModule} from "ng2-bootstrap/ng2-bootstrap";
import {MaterialModule} from '@angular/material';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        ReactiveFormsModule,
        DevExtremeModule,
        Ng2BootstrapModule,
        MaterialModule.forRoot(),
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
        NoteDetailComponent,
        UserListComponent,
        UserDetailComponent,
        HeaderComponent,
        SidebarComponent,
        Ellipses
    ],
    providers: [
        appRoutingProviders,
        AuthService,
        AuthGuard,
        UserService
    ],
    entryComponents:[

    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
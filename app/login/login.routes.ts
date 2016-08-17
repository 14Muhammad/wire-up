import { AuthGuard }          from '../auth.guard';
import { AuthService }        from '../auth.service';
import {LoginComponent} from "./login.component";
import { Routes, RouterModule }  from '@angular/router';

export const LoginRoutes: Routes = [
    { path: 'login', component: LoginComponent }
];

export const LoginRouting = RouterModule.forChild(LoginRoutes);

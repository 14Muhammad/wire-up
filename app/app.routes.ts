import { Routes, RouterModule } from '@angular/router';
import {LoginRoutes} from "./login/login.routes";
import {CanDeactivateGuard} from "./interfaces";
import {SignupRoutes} from "./signup/signup.routes";
import {ResetPasswordRoutes} from "./reset-password/reset-password.routes";
import {HomeRoutes} from "./home/home.routes";

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login'},
    ...LoginRoutes,
    ...SignupRoutes,
    ...ResetPasswordRoutes,
    ...HomeRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);


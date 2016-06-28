import { provideRouter, RouterConfig } from '@angular/router';
import {LoginRoutes, AUTH_PROVIDERS} from "./login/login.routes";
import {CanDeactivateGuard} from "./interfaces";
import {SignupRoutes} from "./signup/signup.routes";
import {ResetPasswordRoutes} from "./reset-password/reset-password.routes";
import {HomeRoutes} from "./home/home.routes";

export const routes: RouterConfig = [
    { path: '', redirectTo: 'login'},
    ...LoginRoutes,
    ...SignupRoutes,
    ...ResetPasswordRoutes,
    ...HomeRoutes
];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AUTH_PROVIDERS,
    CanDeactivateGuard
];

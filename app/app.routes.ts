import { provideRouter, RouterConfig } from '@angular/router';
import { HeroesRoutes }        from './heroes/heroes.routes';
import {ClientRoutes} from "./client/client.routes";
import {CrisisCenterRoutes} from "./crisis-center/crisis-center.routes";
import {LoginRoutes, AUTH_PROVIDERS} from "./login/login.routes";
import {CanDeactivateGuard} from "./interfaces";
import {SignupRoutes} from "./signup/signup.routes";
import {ResetPasswordRoutes} from "./reset-password/reset-password.routes";
import {DashboardRoutes} from "./dashboard/dashboard.routes";

export const routes: RouterConfig = [
    { path: '', redirectTo: 'dashboard'},
    ...LoginRoutes,
    ...SignupRoutes,
    ...ResetPasswordRoutes,
    ...DashboardRoutes,
    ...HeroesRoutes,
    ...ClientRoutes,
    ...CrisisCenterRoutes
];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AUTH_PROVIDERS,
    CanDeactivateGuard
];

import { provideRouter, RouterConfig } from '@angular/router';
import { HeroesRoutes }        from './heroes/heroes.routes';
import {ClientRoutes} from "./client/client.routes";
import {CrisisCenterRoutes} from "./crisis-center/crisis-center.routes";
import {LoginRoutes, AUTH_PROVIDERS} from "./login/login.routes";
import {CanDeactivateGuard} from "./interfaces";

export const routes: RouterConfig = [
    { path: '', redirectTo: 'login'},
    ...LoginRoutes,
    ...HeroesRoutes,
    ...ClientRoutes,
    ...CrisisCenterRoutes
];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AUTH_PROVIDERS,
    CanDeactivateGuard
];

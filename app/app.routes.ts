import { provideRouter, RouterConfig } from '@angular/router';
import { CrisisListComponent }  from './crisis-list.component';
import { HeroListComponent }    from './hero-list.component';
import {LoginComponent} from "./login/login-component";
import { HeroesRoutes }        from './heroes/heroes.routes';
import {ClientRoutes} from "./client/client.routes";

export const routes: RouterConfig = [
    { path: '', redirectTo: 'login'},
    { path: 'crisis-center', component: CrisisListComponent },
    { path: 'login', component: LoginComponent },
    ...HeroesRoutes,
    ...ClientRoutes
];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];

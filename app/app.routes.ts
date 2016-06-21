import { provideRouter, RouterConfig } from '@angular/router';
import { CrisisListComponent }  from './crisis-list.component';
import { HeroListComponent }    from './hero-list.component';
import {LoginComponent} from "./login/login-component";
export const routes: RouterConfig = [
    { path: '', redirectTo: 'login'},
    { path: 'crisis-center', component: CrisisListComponent },
    { path: 'heroes', component: HeroListComponent },
    { path: 'login', component: LoginComponent }
];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];

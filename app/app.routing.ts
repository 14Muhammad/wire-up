import { Routes, RouterModule } from '@angular/router';

import {LoginRoutes} from "./login/login.routes";
import {SignupRoutes} from "./signup/signup.routes";
import {ResetPasswordRoutes} from "./reset-password/reset-password.routes";
import {HomeRoutes} from "./home/home.routes";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login'},
    { path: 'todos', loadChildren:'app/todo/todo.module#ToDoModule'},
    ...LoginRoutes,
    ...SignupRoutes,
    ...ResetPasswordRoutes,
    ...HomeRoutes
];

export const routing = RouterModule.forRoot(routes);


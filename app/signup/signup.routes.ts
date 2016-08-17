import { AuthGuard }          from '../auth.guard';
import { AuthService }        from '../auth.service';
import {SignupComponent} from "./signup.component";
import {RouterModule, Routes} from "@angular/router";

export const SignupRoutes: Routes = [
    { path: 'signup', component: SignupComponent }
];

export const SignupRouting = RouterModule.forChild(SignupRoutes);
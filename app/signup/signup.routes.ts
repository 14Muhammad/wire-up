import { AuthGuard }          from '../auth.guard';
import { AuthService }        from '../auth.service';
import {SignupComponent} from "./signup.component";

export const SignupRoutes = [
    { path: 'signup', component: SignupComponent }
];

export const AUTH_PROVIDERS = [AuthGuard, AuthService];

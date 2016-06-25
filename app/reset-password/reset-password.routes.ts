import { AuthGuard }          from '../auth.guard';
import { AuthService }        from '../auth.service';
import {ResetPasswordComponent} from "./reset-password.component";

export const ResetPasswordRoutes = [
    { path: 'reset-password', component: ResetPasswordComponent }
];

export const AUTH_PROVIDERS = [AuthGuard, AuthService];

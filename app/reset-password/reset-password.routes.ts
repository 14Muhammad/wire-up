import { AuthGuard }          from '../auth.guard';
import { AuthService }        from '../auth.service';
import {ResetPasswordComponent} from "./reset-password.component";
import {RouterModule, Routes} from "@angular/router";

export const ResetPasswordRoutes : Routes = [
    { path: 'reset-password', component: ResetPasswordComponent }
];

export const ResetPasswordRouting = RouterModule.forChild(ResetPasswordRoutes);

import {RouterConfig, Routes, RouterModule}          from '@angular/router';
import {HomeComponent} from "./home.component";
import {ProjectRoutes} from "../project/project.routes";
import {MessageRoutes} from "../message/message.routes";
import {UserRoutes} from "../user/user.routes";
import {DashboardRoutes} from "../dashboard/dashboard.routes";
import {HeroesRoutes} from "../heroes/heroes.routes";
import {ClientRoutes} from "../client/client.routes";
import {CrisisCenterRoutes} from "../crisis-center/crisis-center.routes";
import {AuthGuard} from "../auth.guard";
import {EventRoutes} from "../event/event.routes";

export const HomeRoutes: Routes = [
    {
        path: '',
        redirectTo: '',
        terminal: true
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            ...ProjectRoutes,
            ...MessageRoutes,
            ...UserRoutes,
            ...DashboardRoutes,
            ...EventRoutes,
            ...HeroesRoutes,
            ...ClientRoutes,
            ...CrisisCenterRoutes
        ]
    }

];
export const HomeRouting = RouterModule.forChild(HomeRoutes);
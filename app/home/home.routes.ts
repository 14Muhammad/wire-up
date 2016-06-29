import { RouterConfig }          from '@angular/router';
import {HomeComponent} from "./home.component";
import {ProjectRoutes} from "../project/project.routes";
import {MessageRoutes} from "../message/message.routes";
import {UserRoutes} from "../user/user.routes";
import {DashboardRoutes} from "../dashboard/dashboard.routes";
import {HeroesRoutes} from "../heroes/heroes.routes";
import {ClientRoutes} from "../client/client.routes";
import {CrisisCenterRoutes} from "../crisis-center/crisis-center.routes";
import {AuthGuard} from "../auth.guard";

export const HomeRoutes: RouterConfig = [
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
            ...HeroesRoutes,
            ...ClientRoutes,
            ...CrisisCenterRoutes
        ]
    }

];

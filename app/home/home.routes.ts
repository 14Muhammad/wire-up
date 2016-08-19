import {RouterConfig, Routes, RouterModule}          from '@angular/router';
import {HomeComponent} from "./home.component";
import {ProjectRoutes} from "../project/project.routes";
import {MessageRoutes} from "../message/message.routes";
import {MemberRoutes} from "../member/member.routes";
import {DashboardRoutes} from "../dashboard/dashboard.routes";
import {ClientRoutes} from "../client/client.routes";
import {AuthGuard} from "../auth.guard";
import {EventRoutes} from "../event/event.routes";
import {NoteRoutes} from "../note/note.routes";

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
            ...NoteRoutes,
            ...ProjectRoutes,
            ...MessageRoutes,
            ...MemberRoutes,
            ...DashboardRoutes,
            ...EventRoutes,
            ...ClientRoutes
        ]
    }

];
export const HomeRouting = RouterModule.forChild(HomeRoutes);
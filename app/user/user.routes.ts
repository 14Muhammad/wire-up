import {RouterModule, Routes}          from '@angular/router';
import {UserListComponent} from "./user-list.component";
import {UserDetailComponent} from "./user-detail.component";


export const UserRoutes: Routes = [
    { path: 'users',  component: UserListComponent },
    { path: 'user/:id', component: UserDetailComponent }
];
export const UserRouting = RouterModule.forChild(UserRoutes);
import { RouterConfig }          from '@angular/router';
import {UserListComponent} from "./user-list.component";
import {UserDetailComponent} from "./user-detail.component";

export const UserRoutes: RouterConfig = [
  { path: 'users',  component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent }
];

import {Routes, RouterModule} from '@angular/router';
import {ToDoComponent} from "./todo.component";
import {AuthGuard} from "../auth.guard";

export const ToDoRoutes: Routes = [
    {path: 'todos', component: ToDoComponent,canActivate: [AuthGuard],}
];
export const ToDoRouting = RouterModule.forChild(ToDoRoutes);
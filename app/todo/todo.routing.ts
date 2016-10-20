import {Routes, RouterModule} from '@angular/router';
import {ToDoComponent} from "./todo.component";
import {AuthGuard} from "../auth.guard";

const ToDoRoutes: Routes = [
    {path: '', component: ToDoComponent,canActivate: [AuthGuard],}
];
export const ToDoRouting = RouterModule.forChild(ToDoRoutes);
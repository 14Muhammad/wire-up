import { Routes, RouterModule}          from '@angular/router';
import {EventListComponent} from "./event-list.component";
import {EventDetailComponent} from "./event-detail.component";


export const EventRoutes: Routes = [
    {path: 'events', component: EventListComponent},
    {path: 'event/:id', component: EventDetailComponent}
];
export const EventRouting = RouterModule.forChild(EventRoutes);
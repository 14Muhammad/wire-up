import { RouterConfig }          from '@angular/router';
import {EventListComponent} from "./event-list.component";
import {EventDetailComponent} from "./event-detail.component";


export const EventRoutes: RouterConfig = [
    {path: 'events', component: EventListComponent},
    {path: 'event/:id', component: EventDetailComponent}
];

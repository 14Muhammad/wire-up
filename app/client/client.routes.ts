import { RouterConfig }          from '@angular/router';
import { ClientListComponent }     from './client-list.component';
import { ClientDetailComponent }   from './client-detail.component';

export const ClientRoutes: RouterConfig = [
    {path: 'clients', component: ClientListComponent},
    {path: 'client/:id', component: ClientDetailComponent}
];

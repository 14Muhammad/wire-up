import {RouterConfig, Routes, RouterModule}          from '@angular/router';
import { ClientListComponent }     from './client-list.component';
import { ClientDetailComponent }   from './client-detail.component';

export const ClientRoutes: Routes = [
    {path: 'clients', component: ClientListComponent},
    {path: 'client/:id', component: ClientDetailComponent}
];

export const ClientRouting = RouterModule.forChild(ClientRoutes);

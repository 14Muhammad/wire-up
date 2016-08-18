import {Routes, RouterModule}          from '@angular/router';
import {ProjectListComponent} from "./project-list.component";
import {ProjectDetailComponent} from "./project-detail.component";

export const ProjectRoutes: Routes = [
    {path: 'projects', component: ProjectListComponent},
    {path: 'project/:id', component: ProjectDetailComponent}
];
export const ProjectRouting = RouterModule.forChild(ProjectRoutes);
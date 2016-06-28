import { RouterConfig }          from '@angular/router';
import {ProjectListComponent} from "./project-list.component";
import {ProjectDetailComponent} from "./project-detail.component";

export const ProjectRoutes: RouterConfig = [
    {path: 'projects', component: ProjectListComponent},
    {path: 'project/:id', component: ProjectDetailComponent}
];

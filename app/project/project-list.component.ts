import {Component, OnInit, ViewChild}   from '@angular/core';
import { Router }              from '@angular/router';
import {AuthService} from "../auth.service";
import {ProjectService, Project} from "./project.service";
import {DxDataGrid, DxButton, DxToolbar} from "devextreme-angular2";
@Component({
    templateUrl:'app/project/project-list.component.html',
    styleUrls:['app/project/project-list.component.css'],
    providers: [ProjectService],
    directives: [DxDataGrid,DxButton,DxToolbar]
})
export class ProjectListComponent implements OnInit {
    projects: Project[];
    constructor(
        public authService: AuthService,
        private router: Router,
        private service: ProjectService) {
        if (!this.authService.isLoggedIn)
            this.router.navigate(['/login']);
    }
    @ViewChild(DxDataGrid) dataGrid:DxDataGrid
    refresh() {
        this.dataGrid.instance.refresh();
    }
    ngOnInit() {
        this.service.getProjects().then(projects => this.projects = projects);
    }
    onSelect(project: Project) {
        this.router.navigate(['/project', project.id]);
    }

}

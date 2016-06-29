import {Component, OnInit, ViewChild}   from '@angular/core';
import { Router }              from '@angular/router';
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
        private router: Router,
        private service: ProjectService) {

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


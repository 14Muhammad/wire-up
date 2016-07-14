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

    dxDataGird = {
        allowColumnResizing : true,
        hoverStateEnabled : false,
        allowColumnReordering : true,
        rowAlternationEnabled : true,
        selection : {
            mode: 'single'
        },
        groupPanel : {
            visible: true
        },
        filterRow : {
            visible: true,
            applyFilter: 'auto'
        },
        searchPanel:{
            visible: true
        },
        editing: {
            mode: 'cell',
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
            texts:{
                addRow: 'Add a project'
            }
        },
        paging: {
            pageSize: 5
        },
        pager : {
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true
        },
        export : {
            enabled: true,
            fileName:'Projects',
            allowExportSelectedData: true
        },
        onEditingStart (e) {
            console.log("onEditingStart");
            console.log(e);
        },
        onCellPrepared (e) {
            console.log("onCellPrepared");
            console.log(e);
            if(e.value === ''){
                e.cellElement.addClass('emptyCell');
            }
        },
        onRowPrepared(e){
            console.log("onRowPrepared");
            console.log(e);
        },
        onContextMenuPreparing(e){
            console.log("onRowPrepared");
            console.log(e);
            if (e.row.rowType === 'data') {
                e.items = [{
                    text: "Edit",
                }, {
                    text: "Insert",
                }, {
                    text: "Delete",
                }];
            }
        },
        onDataErrorOccurred(e){
            console.log("onDataErrorOccurred");
            console.log(e);
        },
        onContentReady(e){
            console.log("onContentReady");
            console.log(e);
        }
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


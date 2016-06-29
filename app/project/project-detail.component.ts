import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import {ProjectService, Project} from "./project.service";
@Component({
    template: `
  <h2>Clients</h2>
  <div *ngIf="project">
    <h3>"{{project.name}}"</h3>
    <div>
      <label>Id: </label>{{project.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="project.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoProjects()">Back</button>
    </p>
  </div>
  `,
    providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit, OnDestroy  {
    project: Project;
    private sub: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService) {

    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getProject(id).then(project => this.project = project);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    gotoProjects() { this.router.navigate(['/projects']); }
}

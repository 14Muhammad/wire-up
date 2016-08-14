import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
export class Project {
    constructor(public id: string,
                public name: string,
                public client: string,
                public price:string,
                public startTime:string,
                public endTime:string,
                public progress: number,
                public status:string,
                public labels:string,
                public description:string,
                public createdAt:string,
                public updatedAt:string) { }
}
let PROJECTS = [
    new Project('099', 'DataGrid','c','100', '2 May', '3 June', 23, 'open', 'Data Grid projectModel from USA', 'Needo','',''),
    new Project('099', 'Max','c','100', '2 May', '3 June', 23, 'open', 'Data Grid projectModel from USA', 'Needo','',''),
    new Project('099', 'Core','c','100', '2 May', '3 June', 50, 'open', 'Data Grid projectModel from USA', 'Needo','',''),
];
let projectsPromise = Promise.resolve(PROJECTS);
@Injectable()
export class ProjectService {
    constructor(private http: Http) {}

    public getProjects() : Observable<Project[]>{
        let projectsPath = 'http://127.0.0.1:8081/wireup/projects';
        let heroes = this.http.get(projectsPath, {headers: this.getHeaders()})
            .map(res => <Project[]> res.json())
            .catch(this.handleError);
        return heroes;
    }
    public addProject(newProject) {
        var addProjectPath = 'http://127.0.0.1:8081/wireup/project/add';
        return this.http.post(addProjectPath, newProject,{headers: this.getHeaders()})
            .catch(this.handleError);
    }

    public updateProject(id, updatedProject) {
        var addProjectPath = 'http://127.0.0.1:8081/wireup/project/update/'+id;
        return this.http.put(addProjectPath, updatedProject,{headers: this.getHeaders()})
            .catch(this.handleError);
    }

    public deleteProject(id) {
        var deleteProjectPath = 'http://127.0.0.1:8081/wireup/project/delete/'+id;
        return this.http.delete(deleteProjectPath,{headers: this.getHeaders()})
            .catch(this.handleError);
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
    private handleError (error: any) {
        let errorMsg = error.message || ` Problem in Projects retrieving`
        console.error(errorMsg);
        return Observable.throw(errorMsg);
    }

    getProject(id: string | string) {
        return projectsPromise
            .then(projects => projects.filter(project => project.id == id)[0]);
    }
}

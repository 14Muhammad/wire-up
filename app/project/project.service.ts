import { Injectable } from '@angular/core';
export class Project {
    constructor(public id: number,
                public name: string,
                public price:string,
                public startDate:string,
                public endDate:string,
                public progress: string,
                public status:string,
                public description:string,
                public client: string) { }
}
let PROJECTS = [
    new Project(099, 'DataGrid','', '2 May', '3 June', '34%', 'open', 'Data Grid project from USA', 'Needo'),
    new Project(199, 'Kafka','3000$', '2 May', '3 June', '34%', 'open', 'Data Grid project from USA', 'Needo'),
    new Project(299, 'Denis','3000$', '2 May', '3 June', '34%', 'open', 'Data Grid project from USA', 'Needo'),
    new Project(399, 'DataMax','3000$', '2 May', '3 June', '34%', 'open', 'Data Grid project from USA', 'Needo'),
    new Project(499, 'coremax','3000$', '2 May', '3 June', '34%', 'open', 'Data Grid project from USA', 'Needo'),
    new Project(599, 'Hadoop','3000$', '2 May', '3 June', '34%', 'open', 'Data Grid project from USA', 'Needo'),
    new Project(699, 'Zero installation','3000$', '2 May', '3 June', '34%', 'open', 'Data Grid project from USA', 'Needo'),
];
let projectsPromise = Promise.resolve(PROJECTS);
@Injectable()
export class ProjectService {
    getProjects() { return projectsPromise; }
    getProject(id: number | string) {
        return projectsPromise
            .then(projects => projects.filter(project => project.id === +id)[0]);
    }
}

import {Component, OnInit} from "@angular/core";
import {ToDo} from "./todo";
@Component({
    moduleId: module.id,
    templateUrl:'todo.component.html',
    styleUrls:[
        'todo.component.css',
        'todo.component1.css'
    ]
})
export class ToDoComponent implements OnInit{

    toDoList: ToDo[];
    constructor() {

    }
    ngOnInit(): void {
        this.toDoList = [
            new ToDo('1','1',new Date(),'hello t1',new Date(),new Date()),
            new ToDo('2','8',new Date(),'hello t2',new Date(),new Date()),
            new ToDo('3','55',new Date(),'hello t3',new Date(),new Date()),
            new ToDo('5','66',new Date(),'hello t3',new Date(),new Date()),
            new ToDo('9','99',new Date(),'hello t4',new Date(),new Date())
        ]
    }
}
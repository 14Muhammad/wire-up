import {Component, OnInit} from "@angular/core";
import * as moment from 'moment';
import {ToDo} from "./todo";
import {TimePhase} from "../common/enums/time-phase";
import {Observable} from "rxjs/Rx";
import {WUWindow} from "../common/interfaces/wu-window.interface";

@Component({
    moduleId: module.id,
    templateUrl:'todo.component.html',
    styleUrls:[
        'todo.component.css',
        'todo.component1.css'
    ]
})

export class ToDoComponent implements OnInit{
    public timePhase = TimePhase;
    nowDate = moment().day();
    toDoList: ToDo[] = [];
    newToDo:string;
    wuWindow: WUWindow = <WUWindow>window;
    speechSynthesis = this.wuWindow.speechSynthesis || {};
    SpeechSynthesisUtterance = this.wuWindow.SpeechSynthesisUtterance || {};

    constructor() {

    }
    ngOnInit(): void {
        for (var i = -1; i < 4; i++) {
            this.toDoList.push(
                new ToDo('column-' + moment().add(i, 'days').format('YYYY-MM-DD'),
                    false,
                    ''+i,
                    moment().add(i, 'days'),
                    [{
                        id:Math.random(),
                        text: 'text ' + Math.random().toPrecision(2),
                        isDone:'is-done'
                    },
                        {
                            id:Math.random(),
                            text: 'text ' + Math.random().toPrecision(2),
                            isDone:'is-done'
                        },
                        {
                            id:Math.random(),
                            text: 'text ' + Math.random().toPrecision(2),
                            isDone:''
                        }],
                    moment().add(i, 'days').isSame(moment(),'day') ? 'present' :
                        moment() < moment().add(i, 'days') ? 'future' : 'past',
                    new Date(),
                    new Date())
            );
        }
    }

    insertTodo(text: string, id:ToDo){
        Observable.from(this.toDoList)
            .filter((x: any) => x.id === id)
            .subscribe(list => {
                list.text.push({
                    id:Math.random(),
                    text: text,
                    isDone:false
                })
                if(this.speechSynthesis) {
                    var utterThis = new this.SpeechSynthesisUtterance(text);
                    this.speechSynthesis.speak(utterThis);
                }
            });
    }

    todoDone(id:ToDo){
        Observable.from(this.toDoList)
            .filter((x: any) => x.id === id)
            .subscribe(list => {

            });
    }
}
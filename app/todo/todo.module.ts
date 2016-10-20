import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ToDoComponent} from "./todo.component";
import {ToDoRouting} from "./todo.routing";
@NgModule({
    declarations:[
        ToDoComponent
    ],
    imports:[CommonModule,ToDoRouting],
    exports:[]

})

export class ToDoModule{

}
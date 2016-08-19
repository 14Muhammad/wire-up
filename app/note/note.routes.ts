import {Routes, RouterModule} from '@angular/router';
import {NoteListComponent} from "./note-list.component";
import {NoteDetailComponent} from "./note-detail.component";


export const NoteRoutes: Routes = [
    {path: 'notes', component: NoteListComponent},
    {path: 'note/:id', component: NoteDetailComponent}
];
export const NoteRouting = RouterModule.forChild(NoteRoutes);
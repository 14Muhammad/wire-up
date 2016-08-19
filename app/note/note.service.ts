import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
export class Note {
    constructor(public id: string,
                public name: string,
                public labels:string,
                public description:string,
                public createdAt:string,
                public updatedAt:string) { }
}

@Injectable()
export class NoteService {
    constructor(private http: Http) {}

    public getNotes() : Observable<Note[]>{
        let notesPath = 'http://127.0.0.1:8081/wireup/notes';
        let heroes = this.http.get(notesPath, {headers: this.getHeaders()})
            .map(res => <Note[]> res.json())
            .catch(this.handleError);
        return heroes;
    }
    public addNote(newNote) {
        var addNotePath = 'http://127.0.0.1:8081/wireup/note/add';
        return this.http.post(addNotePath, newNote,{headers: this.getHeaders()})
            .catch(this.handleError);
    }

    public updateNote(id, updatedNote) {
        var addNotePath = 'http://127.0.0.1:8081/wireup/note/update/'+id;
        return this.http.put(addNotePath, updatedNote,{headers: this.getHeaders()})
            .catch(this.handleError);
    }

    public deleteNote(id) {
        var deleteNotePath = 'http://127.0.0.1:8081/wireup/note/delete/'+id;
        return this.http.delete(deleteNotePath,{headers: this.getHeaders()})
            .catch(this.handleError);
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
    private handleError (error: any) {
        let errorMsg = error.message || ` Problem in notes retrieving`
        console.error(errorMsg);
        return Observable.throw(errorMsg);
    }

}

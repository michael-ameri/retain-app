import {Injectable} from '@angular/core'
import {ApiService} from './api'
import {Observable} from "rxjs";


@Injectable()
export class NoteService {

    path: string = '/notes';

    constructor(private api:ApiService){}

    createNote(note): Observable<any>{
        return this.api.post(this.path, note);
    }

    getNotes(): Observable<any>{
        return this.api.get(this.path);
    }

    // todo note type
    completeNote(note) {
        return this.api.delete(`${this.path}/${note.id}`);
    }
}
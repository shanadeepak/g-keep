import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Note } from '../note.model';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/notes/';
@Injectable({
  providedIn: 'root'
})
export class NotesApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getNotes (): Observable<Note[]> {
    return this.http.get<Note[]>(apiUrl)
      .pipe(
        tap(notes => console.log('fetched Notes')),
        catchError(this.handleError('getNotes', []))
      );
  }
  getNote(id: number): Observable<Note> {
    const url = apiUrl + id;
    return this.http.get<Note>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Note>(`getProduct id=${id}`))
    );
  }
  addNote (note): Observable<Note> {
    return this.http.post<Note>(apiUrl, note, httpOptions).pipe(
      tap((nt: Note) => console.log(`added product w/ id=${nt._id}`)),
      catchError(this.handleError<Note>('addNote'))
    );
  }
  updateNote (id, note): Observable<any> {
    const url = apiUrl + id;
    return this.http.put(url, note, httpOptions).pipe(
      tap(_ => console.log(`updated Note id=${id}`)),
      catchError(this.handleError<any>('updateNote'))
    );
  }
  deleteNote (id): Observable<Note> {
    const url = apiUrl + id;
    return this.http.delete<Note>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted note id=${id}`)),
      catchError(this.handleError<Note>('deleteNote'))
    );
  }
}

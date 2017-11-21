import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessagesService } from '../services/Messages.service';

import { User } from '../models/User';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class UsersService {
  private usersUrl = 'api/users';

  constructor(
    private http: HttpClient,
    private messagesService: MessagesService,
  ) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.usersUrl)
      .pipe(
        tap((users: User[]) => this.log('users fetched')),
        catchError(this.handleError('getUsers', [])),
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http
      .get<User>(url)
      .pipe(
        tap(_ => this.log(`fetched user with id = ${id}`)),
        catchError(this.handleError<User>(`getUser with id=${id}`)),
      );
  }

  addUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.usersUrl, user, httpOptions)
      .pipe(
        tap(_ => this.log(`add new user with id=${user.id}`)),
        catchError(this.handleError<User>('addUser')),
      );
  }

  updateUser(user: User): Observable<any> {
    return this.http
      .put(this.usersUrl, user, httpOptions)
      .pipe(
        tap(_ => this.log(`update user with id=${user.id}`)),
        catchError(this.handleError<any>('updateUser')),
      );
  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http
      .delete<User>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted user with id=${id}`)),
        catchError(this.handleError<User>('deleteUser')),
      );
  }

  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http
      .get<User[]>(`${this.usersUrl}/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found users matching "${term}"`)),
        catchError(this.handleError<User[]>('searchUsers', [])),
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messagesService.add(`Users service: ${message}`);
  }
}

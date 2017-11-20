import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // Get all Posts from server
  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.postsUrl)
      .pipe(
        tap(posts => console.log('Posts fetched successfully!')),
        catchError(this.handleError('getPosts', [])),
      );
  }

  // Get post by id
  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http
      .get<Post>(url)
      .pipe(
        tap(_ => console.log(`Fetched Post with id=${id}`)),
        catchError(this.handleError<Post>(`getPost id=${id}`)),
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

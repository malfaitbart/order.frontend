import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from './item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl= 'http://localhost:57340/api/Items';
  constructor(
    private http: HttpClient
  ) {}

  AddItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item, httpOptions).pipe(
      tap((item:Item) => this.log(`added item with name ${item.name}`)),
      catchError(this.handleError<Item>('AddItem'))
    );
  }

  GetItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.apiUrl);
  };

  GetById(id:string): Observable<Item>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Item>(url)
      .pipe(
        tap(h=> {this.log(`fetched itemid = ${id}`)}),
        catchError(this.handleError<Item>(`getItem id=${id}`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("boe" + error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }

}

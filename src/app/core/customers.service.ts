import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Customer } from './customer';
import { MatGridTileHeaderCssMatStyler } from '@angular/material';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiUrl = 'http://localhost:57340/api/Customers';
  constructor(
    private http: HttpClient
  ) { }

  add(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer, httpOptions).pipe(
      tap((customer: Customer) => this.log(`added customer with name ${customer.firstName} ${customer.lastName}`)),
      catchError(this.handleError<Customer>('add'))
    );
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  getById(id: string): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Customer>(url)
      .pipe(
        tap(h => { this.log(`fetched customerid = ${id}`) }),
        catchError(this.handleError<Customer>(`getItem id=${id}`))
      );
  }

  update(item: Customer): Observable<Customer> {
    let url = `${this.apiUrl}/${item.id}`;
    return this.http.put(url, item, httpOptions).pipe(
      tap(_ => this.log(`updated customer id=${item.id}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("boe" + error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`CustomerService: ${message}`);
  }

}

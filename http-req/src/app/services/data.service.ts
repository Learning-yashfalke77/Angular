import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
  }

  create(resource:any) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      catchError(this.handleError)
    )
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true })).pipe(
      catchError(this.handleError)
    )
  }

  delete(id: any) {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      return throwError(() => new BadInputError(error));
    }
    if (error.status === 404) {
      return throwError(() => new NotFoundError(error));
    }
    return throwError(() => new AppError(error));

  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
    return ["authors1", "authors2", "authors3"]
  }

  constructor() { }
}

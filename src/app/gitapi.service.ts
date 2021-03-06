import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitapiService {
  
  private url = 'https://api.github.com/users/cgeopapa/repos';

  constructor(private http: HttpClient) { }

  public getConfig(){
    return this.http.get(this.url);
  }
}

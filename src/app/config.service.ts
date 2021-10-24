import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) {
    this.configUrl = "https://jsonplaceholder.typicode.com/users/1"
   }

  getConfig(){
    return this.http.get<any>(this.configUrl)
  }
}

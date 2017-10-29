import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string): Observable<Response> {

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlSearchParms = new URLSearchParams();
    urlSearchParms.append('username', username);
    urlSearchParms.append('password', password);
    const body = urlSearchParms.toString();

    return this.http.post('/api/login', body, {headers: headers});
  }

  logout() {
    localStorage.removeItem('user');
  }

  isLogged() {
    return localStorage.getItem('user') != null ? true : false;
  }

}

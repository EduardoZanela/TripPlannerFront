import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {UserProfile} from './models/userProfile';
import {Url} from 'url';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

    private headers: Headers;

   constructor(private http: Http) {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
   }

   register(user: UserProfile): Observable<any> {
     return this.http.post( 'http://localhost:4200/api/save', JSON.stringify(user), { headers: this.headers });
   }

   getUser(): Observable<UserProfile> {
     this.headers.append('Accept', 'application/json');
     return this.http.get('http://localhost:4200/api/getCurrentUser', {headers: this.headers}).map(
       response => {
         return response.json() as UserProfile;
       }
     );
   }

    test(texto: string): Observable<any[]> {
     this.headers.append('Accept', 'application/json');
     return this.http.get ('http://localhost:4200/maps/api/place/autocomplete/json?input='
        + texto + '&types=(cities)&language=pt_BR&key=AIzaSyCCBNJdEYoeY0Y6JEIdyztP-z9TbFHhMEw', {headers: this.headers})
       .map(
       response => {
         return response.json();
       }
     );
    }
}


import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { User, Application } from '../core/user';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  users: Observable<User[]>;
  httpClient: any;
  public imageListCache = [];
  constructor(private http: HttpClient) {
  }
  saveUser(user: User) {
    let Headers = new HttpHeaders();
    Headers = Headers.append('Content-Type', 'application/json');
      return this.http.post(environment.apiUrl + 'user/save', JSON.stringify(user), { headers: Headers });
  }
  authenticateUser(username: string, pass: string): Observable<User[]> {
    let Params = new HttpParams();
    Params = Params.append('username', username);
    Params = Params.append('password', pass);
    this.users = this.http.get<User[]>(environment.apiUrl + 'loginuser', { params: Params });
    return this.users;
  }
    getUser(id: string) {
    let Params = new HttpParams();
    Params = Params.append('id', id);
    return this.http.get<User>(environment.apiUrl + 'singleuser', { params: Params });
  }
  userApp(id: string, all) {
    let Params = new HttpParams();
    Params = Params.append('id', id);
    Params = Params.append('all', all);

    return this.http.get<Application>(environment.apiUrl + 'AppApproved', { params: Params });
  }
  makeApprove(app: Application) {
    let Headers = new HttpHeaders();
    Headers = Headers.append('Content-Type', 'application/json');
      return this.http.put(environment.apiUrl + 'app/approve', JSON.stringify(app), { headers: Headers });

  }
  deleteApp(app: Application) {
    let Headers = new HttpHeaders();
    Headers = Headers.append('Content-Type', 'application/json');
      return this.http.put(environment.apiUrl + 'app/delete', JSON.stringify(app), { headers: Headers });

  }
  SaveApplication(app: Application) {
    let Headers = new HttpHeaders();
    Headers = Headers.append('Content-Type', 'application/json');
      return this.http.post(environment.apiUrl + 'newapp/save', JSON.stringify(app), { headers: Headers });

  }

}

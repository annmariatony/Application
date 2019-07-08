
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
  makeApprove(userid: string) {
    let Params = new HttpParams();
    Params = Params.append('UserID', userid);
    return this.http.put(environment.apiUrl + 'app/approve', { params: Params });
  }
  deleteApp(userid: string) {
    let Params = new HttpParams();
    Params = Params.append('UserID', userid);
    return this.http.delete(environment.apiUrl + 'app/delete', { params: Params });
  }
  // postFile(fileToUpload: File, fileName: string): Observable<any> {
  //   this.imageListCache = [];
  //   const idtoken = this.getCachedUser('idtoken');
  //   return this.http.post(this.serviceURL, fileToUpload,
  //     { headers: {'filename': fileName, 'enctype': 'multipart/form-data', 'idtoken': idtoken}
  //     , reportProgress: true});
  // }
  // public getCachedUser(attribute: string): any {
  //   if (localStorage.length > 0 && localStorage.getItem('expiry') != null) {
  //     const expiry: number = Number.parseInt(localStorage.getItem('expiry'));
  //     const now = new Date().getTime();
  //     if ((now - expiry) < 3600000 && localStorage.getItem(attribute) != null) {
  //       try {
  //         return JSON.parse(localStorage.getItem(attribute));
  //       } catch (e) {
  //         return localStorage.getItem(attribute);
  //       }
  //     }
  //   }
  //   return null;
  // }
//   loginUser(): void {
//     this.session.setSession('userAuthenticated', 'true');
//   }

//   setCurrentUser(user: User) {
//     this.userSource.next(user);
//     this.session.setSessionObj('user', user);
//   }



//   getChatUsers() {
//     this.users = this.http.get<User[]>(environment.apiUrl + 'users/chat');
//     return this.users;
//   }

//   isLoggedIn(): boolean {
//     let retVal: boolean;
//     retVal = (this.session.getSession('userAuthenticated') === 'true');
//     return retVal;
//   }



//   saveUserPhoto(user: User) {
//     let Headers = new HttpHeaders();
//     Headers = Headers.append('Content-Type', 'application/json');
//     return this.http.put(environment.apiUrl + 'user/photo', JSON.stringify(user), { headers: Headers });
//   }

//   saveUserTemplate(template: string) {
//     let Headers = new HttpHeaders();
//     Headers = Headers.append('Content-Type', 'application/json');
//     let thisUser: User;
//     this.currentUser.subscribe(user => thisUser = user);
//     thisUser.Template = template;
//     this.setCurrentUser(thisUser);
//     return this.http.put(environment.apiUrl + 'user/template', JSON.stringify(thisUser), { headers: Headers });
//   }

  // deleteApp(userid: string) {
  //   let Params = new HttpParams();
  //   Params = Params.append('UserID', userid);
  //   return this.http.delete(environment.apiUrl + 'user/delete', { params: Params });
  // }

//   getDoctors(doctorId: string, docname: string) {
//     let Params = new HttpParams();
//     Params = Params.append('doctorid', doctorId);
//     Params = Params.append('docname', docname);
//     return this.http.get<any>(environment.apiUrl + 'doctor', { params: Params });
//   }

//   getDoctorNames(drnames: string) {
//     console.log(drnames);
//     let Params = new HttpParams();
//     Params = Params.append('drnames', drnames);
//     return this.http.get<any>(environment.apiUrl + 'doctor', { params: Params });
//   }
//   getRamadanDocNames(ramadancal) {
//     let Params = new HttpParams();
//     Params = Params.append('ramadancal', ramadancal);
//     return this.http.get<any>(environment.apiUrl + 'doctor', { params: Params });
//   }
//   getDoctorsSpecialty(specialty: string) {
//     let Params = new HttpParams();
//     Params = Params.append('specialty', specialty);
//     return this.http.get<any>(environment.apiUrl + 'specialty/', { params: Params });
//   }

//   getSpecialties() {
//     this.specialties = this.http.get<Specialty[]>(environment.apiUrl + 'specialties');
//     return this.specialties;
//   }

//   getDocTimings(doctor: string) {
//     let Params = new HttpParams();
//     Params = Params.append('doctor', doctor);
//     this.timings = this.http.get<Timings[]>(environment.apiUrl + 'doctimings', { params: Params });
//     return this.timings;
//   }

//   getDocPhoto(name: string) {
//     let Params = new HttpParams();
//     Params = Params.append('name', name);
//     return this.http.get(environment.apiUrl + 'docphoto', { params: Params });
//   }

//   saveDocTimings(timings: Timings) {
//     let Headers = new HttpHeaders();
//     Headers = Headers.append('Content-Type', 'application/json');
//     this.http.post(environment.apiUrl + 'doctimingssave',
//       JSON.stringify(timings), { headers: Headers }).subscribe();
//   }

//   getDocHolidays(doctor: string) {
//     let Params = new HttpParams();
//     Params = Params.append('doctor', doctor);
//     this.holidays = this.http.get<Holiday[]>(environment.apiUrl + 'docholidays', { params: Params });
//     return this.holidays;
//   }

//   deldocholiday(id: string) {
//     let Params = new HttpParams();
//     Params = Params.append('id', id);
//     return this.http.delete(environment.apiUrl + 'deldocholiday', { params: Params });
//   }

//   deletedoctor(id: string) {
//     let Params = new HttpParams();
//     Params = Params.append('id', id);
//     return this.http.delete(environment.apiUrl + 'deldoctor', { params: Params });
//   }

//   savedocholiday(holiday: Holiday) {
//     let Headers = new HttpHeaders();
//     Headers = Headers.append('Content-Type', 'application/json');
//     return this.http.post(environment.apiUrl + 'savedocholiday', JSON.stringify(holiday), { headers: Headers });
//   }

//   getMessages() {
//     let Params = new HttpParams();
//     Params = Params.append('user', this.session.getSessionObj('user')['Name']);

//     this.messages = this.http.get<Message[]>(environment.apiUrl + 'messages', { params: Params });
//     return this.messages;
//   }

//   postNewMessage(message: Message) {
//     let Headers = new HttpHeaders();
//     Headers = Headers.append('Content-Type', 'application/json');
//     this.http.post(environment.apiUrl + 'messagesend',
//       JSON.stringify(message), { headers: Headers }).subscribe();
//   }

//   getUnread() {
//     let Params = new HttpParams();
//     Params = Params.append('user', this.session.getSessionObj('user')['Name']);
//     this.unread = this.http.get<Unread[]>(environment.apiUrl + 'messagesunread', { params: Params });
//     return this.unread;
//   }

//   updateMessageStatus(sender: string) {
//     let Headers = new HttpHeaders();
//     Headers = Headers.append('Content-Type', 'application/json');

//     this.http.put(environment.apiUrl + 'messagestatus',
//       { user: this.session.getSessionObj('user')['Name'], sender: sender }, { headers: Headers }).subscribe();
//   }

//   updateTheme(user: User) {
//     let Headers = new HttpHeaders();
//     Headers = Headers.append('Content-Type', 'application/json');

//     this.http.put(environment.apiUrl + 'theme',
//       JSON.stringify(user), { headers: Headers }).subscribe();
//   }
//   getSchedule() {
//     return this.http.get<Schedule[]>(environment.apiUrl + 'schedule');
//   }
//   smsEmailEdit(smsemailedit: Schedule) {
//     let Headers = new HttpHeaders();
//     Headers = Headers.append('Content-Type', 'application/json');
//     return this.http.put(environment.apiUrl + 'smsemailedit',
//       JSON.stringify(smsemailedit), { headers: Headers });
//   }

//   smsEmailAdd(smsemailadd: Schedule) {
//     let Headers = new HttpHeaders();
//     Headers = Headers.append('Content-Type', 'application/json');
//     return this.http.post(environment.apiUrl + 'smsemailadd',
//       JSON.stringify(smsemailadd), { headers: Headers });
//   }
//   deleteSmaEmail(id: string) {
//     let Params = new HttpParams();
//     Params = Params.append('id', id);
//     return this.http.delete(environment.apiUrl + 'smsemaildel', { params: Params });
//   }

//   getDocuments(path: string = null) {
//     let Params = new HttpParams();
//     Params = Params.append('folder', path);
//     return this.http.get(environment.fileserver + 'documents', { params: Params });
//   }
//   createFolder(path: string) {
//     console.log(path);
//     let Headers = new HttpHeaders();
//     Headers = Headers.append('Content-Type', 'application/json');
//     return this.http.post(environment.fileserver + 'folder?path=' + path, { headers: Headers });
//   }
//   deleteFolder(path: string) {
//     let Params = new HttpParams();
//     Params = Params.append('folder', path);
//     return this.http.delete(environment.fileserver + 'folder', { params: Params });
//   }
//   deleteFile(path: string) {
//     let Params = new HttpParams();
//     Params = Params.append('folder', path);
//     return this.http.delete(environment.fileserver + 'file', { params: Params });
//   }
//   getDoctorSpeciality(doctorname: string) {
//     let Params = new HttpParams();
//     Params = Params.append('doctorname', doctorname);
//     return this.http.get<User[]>(environment.apiUrl + 'doctorspecialty', { params: Params });
//   }

}


import { Injectable } from '@angular/core';
 import {  SessionStorageService} from 'angular-web-storage';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { User } from '../core/user';

declare var $: any;

@Injectable()
export class SessionService {
  timeoutTimer;
  dialogRef;

  constructor(
    public session: SessionStorageService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  // setLocal(key, val): void {
  //   this.local.set(key, val);
  // }
  // getLocal(key): string {
  //   return this.local.get(key);
  // }
  // removeLocal(key): void {
  //   this.local.remove(key);
  // }
  // clearLocal(key): void {
  //   this.local.clear();
  // }

  // setLocalObj(key, obj): void {
  //   this.local.set(key, JSON.stringify(obj));
  // }
  // getLocalObj(key): JSON {
  //   return JSON.parse(this.local.get(key));
  // }

  setSession(key, val): void {
    this.session.set(key, val);
  }
  getSession(key): string {
    return this.session.get(key);
  }
  removeSession(key): void {
    this.session.remove(key);
  }
  cleaSession(key): void {
    this.session.clear();
  }

  setSessionObj(key, obj): void {
    this.session.set(key, JSON.stringify(obj));
  }
  getSessionObj(key): JSON {
    return JSON.parse(this.session.get(key));
  }

  getCurrentUser(): User {
    const user = new User();
    const userObj = this.getSessionObj('user');
    if (userObj) {
      user.ID = userObj['ID'];
      user.FirstName = userObj['FirstName'];
      user.LastName = userObj['LastName'];
      user.username = userObj['username'];
      user.password = userObj['password'];
      user.Email = userObj['Email'];
      user.Mobile = userObj['Mobile'];
    }
    return user;
  }

  getUserToken(): string {
    return this.getSessionObj('user')['Token'];
  }

}

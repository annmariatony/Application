import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './service/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private loggedIn: boolean;

  constructor(private router: Router, private userauth: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.loggedIn = this.userauth.isLoggedIn();
    if (this.loggedIn) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}

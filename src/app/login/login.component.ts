import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import { UserService } from '../service/user.service';
import { User } from '../core/user';
import { SessionService } from '../service/session.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
    private userauth: UserService,
    private session: SessionService) { }
username: string;
password: string;
users: User[];
  ngOnInit() {
    this.userauth.setCurrentUser(new User());
  }
  verifyUser(e) {
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    this.userauth.authenticateUser(username, password)
      .subscribe(
        userdata => {
          this.users = userdata['Users'];
          console.log(this.users);
          if (this.users.length) {
              this.userauth.loginUser();
              this.session.setSessionObj('user', this.users[0]);
              this.userauth.setCurrentUser(this.users[0]);
              this.router.navigate(['user/']);
          }
        }
      );
  }
  // login() {
  //     this.userservice.authenticateUser(this.username, this.password)
  //   .subscribe(userdata => {
  //   if (userdata['Users'].length) {
  //     this.user = userdata['Users'];
  //     console.log(this.user[0]);
  //     console.log(this.user[0].ID);
  //    this.router.navigate(['user/' + this.user[0].ID]);
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // });

  // }
  signup() {
    this.router.navigate(['/signup']);

  }
  }


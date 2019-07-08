import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import { UserService } from '../service/user.service';
import { User } from '../core/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
    private userservice: UserService) { }
username: string;
password: string;
user: User[];
  ngOnInit() {
  }
  login() {
      this.userservice.authenticateUser(this.username, this.password)
    .subscribe(userdata => {
    if (userdata['Users'].length) {
      this.user = userdata['Users'];
      console.log(this.user[0]);
      console.log(this.user[0].ID);
     this.router.navigate(['user/' + this.user[0].ID]);
    } else {
      alert('Invalid credentials');
    }
  });

  }
  signup() {
    this.router.navigate(['/signup']);

  }
  }


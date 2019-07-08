import { Component, OnInit } from '@angular/core';
import { User } from '../core/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  constructor(private userservice: UserService
  ) { }

  ngOnInit() {
    this.user = new User();
  }
  signup() {
    this.userservice.saveUser(this.user)
      .subscribe(data => {
      });
  }
}

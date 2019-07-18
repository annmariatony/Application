import { Component, OnInit } from '@angular/core';
import { User, Application } from '../core/user';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userid;
  user: User[] = [];
  application: Application;
  selectedApp: Application;
  app: Application[] = [];
  fileToUpload: File = null;
  all: string;
  currentUser: string;

  constructor(private userservice: UserService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private session: SessionService


  ) { this.currentUser = this.session.getSessionObj('user')['FirstName']; }

  ngOnInit() {
   // this.userid = this.route.snapshot.paramMap.get('id');
    if (this.currentUser === 'Admin') {
      this.all = 'true';
    } else {
      this.all = 'false';

    }
    this.userservice.getUser(this.currentUser)
      .subscribe(userdata => {
        if (userdata['Users'].length) {
          this.user = userdata['Users'][0];
        }
        this.userApp();
      });
  }
  openNew() {
    this.selectedApp = new Application();
    this.selectedApp.Name = this.currentUser;
  }
  userApp() {
    this.userservice.userApp(this.currentUser, this.all)
      .subscribe(userdata => {
        this.app = userdata['Application'];
      });
  }
  deleteApp(app: Application) {
    this.userservice.deleteApp(app)
      .subscribe(data => {
        this.userApp();
      });
  }
  approve(app: Application) {

    this.userservice.makeApprove(app)
      .subscribe(data => {
        this.userApp();
      });
  }
  SaveApplication() {
    this.selectedApp.UserID = this.user[0].ID;
    this.userservice.SaveApplication(this.selectedApp)
    .subscribe(userdata => {
    });
  }
}

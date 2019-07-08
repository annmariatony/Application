import { Component, OnInit } from '@angular/core';
import { User, Application } from '../core/user';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

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
  constructor(private userservice: UserService,
    private route: ActivatedRoute,
    public dialog: MatDialog

  ) { }

  ngOnInit() {
    this.userid = this.route.snapshot.paramMap.get('id');
    if (this.userid === '2') {
      this.all = 'true';
    } else {
      this.all = 'false';

    }
    this.userservice.getUser(this.userid)
      .subscribe(userdata => {
        if (userdata['Users'].length) {
          this.user = userdata['Users'][0];
        }
        this.userApp();
        console.log(this.user);
      });
  }
  openNew() {
    this.selectedApp = new Application();
  }
  userApp() {
    this.userservice.userApp(this.userid, this.all)
      .subscribe(userdata => {
        this.app = userdata['Application'];
        console.log(this.app);
      });
  }
  deleteApp(app: Application) {
    this.userservice.deleteApp(app.ID.toString())
      .subscribe(data => {
        this.userApp();
      });
  }
  approve(app: Application) {
    this.userservice.makeApprove(app.ID.toString())
      .subscribe(data => {
        this.userApp();
      });
  }
}

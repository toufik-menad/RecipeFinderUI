import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private dialog: MatDialog){ }

  ngOnInit() {
  }

  openLogin() {
    const config = new MatDialogConfig();
    config.disableClose= false;
    config.autoFocus=true;
    config.hasBackdrop=true;
    config.width = "400px";
    config.height="600px";
    this.dialog.open(LoginComponent);
    console.log("openlogin function ....")
    

  }

}

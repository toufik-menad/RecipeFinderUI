import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'RecipeFinderUI';
  
  visible: boolean =true;
  
  myFunc(){
    this.visible=false;
    console.log("function called");
  }

  constructor(private dialog: MatDialog) {}

    openDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        //this.dialog.open(LoginComponent, dialogConfig);
    }

  ngOnInit(){
  }

  singUp(){
    const config = new MatDialogConfig();
    config.disableClose= false;
    config.autoFocus=true;
    config.hasBackdrop=true;
    config.width = "400px";
    config.height="600px";
    this.dialog.open(RegistrationComponent);
    console.log("openlogin function ....")
    console.log("singUp()");
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



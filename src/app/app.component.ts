import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShareUserService } from './DataShareServices/ShareUserService';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'RecipeFinderUI';
  show: boolean;
  


  constructor(private dialog: MatDialog, private shareUserService:ShareUserService) {
    this.shareUserService.currentUiState.subscribe(message =>{
      if(message===true){
        console.log(message);
        window.location.reload();
      }
    })
  }

  ngOnInit(){
    if(localStorage.getItem("user")){
      this.show=false;
    }else{
      this.show=true;
    }
  }

    openDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        //this.dialog.open(LoginComponent, dialogConfig);
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
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    const config = new MatDialogConfig();
    config.disableClose= false;
    config.autoFocus=true;
    config.hasBackdrop=true;
    config.width = "400px";
    config.height="600px";
    this.dialog.open(LoginComponent);
    console.log("openlogin function ....")
  }

  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  }

  test(){
    const config = new MatDialogConfig();
    config.disableClose= false;
    config.autoFocus=true;
    config.hasBackdrop=true;
    config.width = "1400px";
    config.height="1600px";
    this.dialog.open(GameComponent);
  }
  
}



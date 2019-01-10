import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShareUserService } from './DataShareServices/ShareUserService';
import { AuthenticationService } from './services/AuthenticationService'
import { GameComponent } from './games/rockpapercissors/game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'RecipeFinderUI';
  show: boolean;
  gameName: string = "GameComponent";

  

  constructor(private dialog: MatDialog, private shareUserService: ShareUserService, private authenticationService: AuthenticationService, private componentFactoryResolver: ComponentFactoryResolver) {
    this.shareUserService.currentUiState.subscribe(message => {
      if (message === true) {
        console.log(message);
        window.location.reload();
      }
    })
  }

  ngOnInit() {
    if (localStorage.getItem("user")) {
      this.show = false;
    } else {
      this.show = true;
    }
  }


  singUp() {
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = true;
    config.hasBackdrop = true;
    config.width = "400px";
    config.height = "600px";
    this.dialog.open(RegistrationComponent);
    console.log("openlogin function ....")
    console.log("singUp()");
  }

  openLogin(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = true;
    config.hasBackdrop = true;
    config.width = "400px";
    config.height = "600px";
    this.dialog.open(LoginComponent);
    console.log("openlogin function ....")
  }

  logOut(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  }

  openPapercissor(): void {
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = true;
    config.hasBackdrop = true;
    config.width = "1400px";
    config.height = "1600px";
    if (this.authenticationService.checkForToken()) {
      this.dialog.open(GameComponent);
    } else {
      this.openLogin();
    }
  }

}



import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';
import { ShareUserService } from '../DataShareServices/ShareUserService';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Injectable()
export class AuthenticationService {
  private url: string = "http://206.189.71.170:8082/login";
  userEntity: User = new User();

  constructor(private http: HttpClient, private shareUserService: ShareUserService, private dialog: MatDialog, private componentFactory: ComponentFactoryResolver) {

  }
  login(user) {
    return this.http.post(this.url, user, { observe: 'response', headers: { 'Accept': 'application/json', 'Content-type': 'application/json' } });
  }

  checkForToken(): boolean {
    if (localStorage.getItem("token") !== null) {
      return true;
    } else {
      return false;
    }
  }


  async getToken(userData: any, component: any) {
    jwt: String;
    await this.login(userData).subscribe(
      response => {
        console.log("sucess ...");
        let jwt = response.headers.get("Authorization");
        if (response.status == 200) {
          this.userEntity.username = userData.username;
        }
        console.log(jwt);
        localStorage.setItem("token", jwt);
        localStorage.setItem("user", this.userEntity.username);
        console.log(localStorage.getItem("token"));
        this.shareUserService.changeMessage(this.userEntity.username);
        this.shareUserService.synchronizeUI(true);
      },
      error => {
        console.log("failure ...");
        const config = new MatDialogConfig();
        config.disableClose = false;
        config.autoFocus = true;
        config.hasBackdrop = true;
        config.width = "400px";
        config.height = "600px";
        let factory = this.componentFactory.resolveComponentFactory(component);
        this.dialog.open(component);
        console.log("openlogin function ....");
      }
    );

  }
}
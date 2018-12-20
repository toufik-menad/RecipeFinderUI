import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { getComponent } from '@angular/core/src/render3/discovery_utils';
import { MatDialogRef } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/AuthenticationService';
import { ShareUserService } from '../DataShareServices/ShareUserService';
import { User } from '../Models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEntity: User = new User();

  ngOnInit() {

  }

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private autherticationService: AuthenticationService, private shareUserService: ShareUserService) { }

  

  async getToken(userData) {
    jwt: String;
    await this.autherticationService.login(userData).subscribe(
      response => {
        console.log("sucess ...");
        let jwt = response.headers.get("Authorization");
        if (response.status == 200) {
          this.userEntity.username = userData.username;
        }
        console.log(jwt);
        localStorage.setItem("token", jwt);
        console.log(localStorage.getItem("token"));
        this.shareUserService.changeMessage(this.userEntity.username);
      },
      error => {
        this.userEntity.username = "...";
        this.shareUserService.changeMessage(this.userEntity.username);
        console.log("failure ...");
      }
    );

    console.log(userData);
  }

  closeLoginForm() {
    this.dialogRef.close();
  }

}

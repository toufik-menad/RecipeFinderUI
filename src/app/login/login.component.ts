import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { getComponent } from '@angular/core/src/render3/discovery_utils';
import { MatDialogRef } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/AuthenticationService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private autherticationService: AuthenticationService) { }

  ngOnInit() {
  }

  async getToken(user) {
    jwt: String;
    await this.autherticationService.login(user).subscribe(
      response => {
        console.log("sucess ...");
        let jwt = response.headers.get("Authorization")
        console.log(jwt);
        localStorage.setItem("token",jwt);
        console.log(localStorage.getItem("token"));
      },
      error => {

        console.log("failure ...")
      }
    );
    console.log(user);
  }

  closeLoginForm() {
    this.dialogRef.close();
  }

}

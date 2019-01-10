import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { RegistrationService } from '../services/registrationService';
import { User } from '../Models/User';
import { AuthenticationService } from '../services/AuthenticationService';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userEntity: User = new User();
  condition: boolean;

  constructor(private dialogRef: MatDialogRef<RegistrationComponent>, private registerService: RegistrationService, private authenticationService: AuthenticationService) { 
  }

  ngOnInit() {
  }

  closeRegistrationForm() {
    this.dialogRef.close();
  }

  async RegisterNewUser(DataForm: any, componentName) {
    console.log(DataForm);
    console.log(componentName.valueOf());
    this.userEntity.username = DataForm.username;
    this.userEntity.password = DataForm.password;
    if (this.userEntity.password == DataForm.rePassword) {
      await this.registerService.RegisterNewUser(this.userEntity).subscribe(
        response => {
          if (response.status == 200) {
            
            let user = new User();
            user.username = DataForm.username;
            user.password = DataForm.password;
            this.authenticationService.getToken(user,componentName);
            this.closeRegistrationForm();
            //display a pop up to tell the user is registered successfully
            
          }

        },
        error => {
          //display the appropriate message
          console.log("handle errors here ..")

        }
      );
    }else{
      console.log("else ------");
      //tell user passwords do not match!!!
      this.condition=true;
  }
  }

}

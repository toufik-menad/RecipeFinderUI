import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { RegistrationService } from '../services/registrationService';
import { User } from '../Models/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userEntity: User = new User();
  condition: boolean;

  constructor(private dialogRef: MatDialogRef<RegistrationComponent>, private registerService: RegistrationService) { }

  ngOnInit() {
  }

  closeRegistrationForm() {
    this.dialogRef.close();
  }

  async RegisterNewUser(DataForm) {
    console.log(DataForm);
    this.userEntity.username = DataForm.username;
    this.userEntity.password = DataForm.password;
    if (this.userEntity.password == DataForm.rePassword) {
      await this.registerService.RegisterNewUser(this.userEntity).subscribe(
        response => {
          if (response.status == 200) {
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

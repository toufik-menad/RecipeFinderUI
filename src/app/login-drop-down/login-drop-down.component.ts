import { Component, OnInit } from '@angular/core';
import { ShareUserService } from '../DataShareServices/ShareUserService';


@Component({
  selector: 'app-login-drop-down',
  templateUrl: './login-drop-down.component.html',
  styleUrls: ['./login-drop-down.component.css']
})
export class LoginDropDownComponent implements OnInit {

  username: string;

  constructor(private shareUserService:ShareUserService) {
    this.shareUserService.currentMessage.subscribe(message =>{

      if(message){
      this.username=message;
      }else{
        this.username = localStorage.getItem("user");
      }
    });
   }

  ngOnInit() {
  }

  test(){
    console.log("test");
  }

}

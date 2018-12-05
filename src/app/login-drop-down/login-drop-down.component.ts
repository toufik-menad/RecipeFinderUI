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
      this.username=message;
    });
   }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";

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

  
}



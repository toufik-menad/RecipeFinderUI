import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { RecipeComponent } from './recipe/recipe.component';
import { LoginComponent } from './login/login.component';
import { MatDialogModule} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/AuthenticationService';
import { RegistrationService } from './services/registrationService';
import { LoginDropDownComponent } from './login-drop-down/login-drop-down.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShareUserService } from './DataShareServices/ShareUserService';
import { User } from './Models/User';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    RecipeComponent,
    LoginComponent,
    LoginDropDownComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule,
    FormsModule
  ],
  providers: [AuthenticationService,ShareUserService,User,RegistrationService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, RegistrationComponent]
})
export class AppModule { }

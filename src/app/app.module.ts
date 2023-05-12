import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllBackComponent } from './backoffice/all-back/all-back.component';
import { AllFrontComponent } from './frontoffice/all-front/all-front.component';
import { HeaderFrontComponent } from './frontoffice/header-front/header-front.component';
import { FooterFrontComponent } from './frontoffice/footer-front/footer-front.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeFrontComponent } from './frontoffice/home-front/home-front.component';
import { FooterBackComponent } from './backoffice/footer-back/footer-back.component';
import { HeaderBackComponent } from './backoffice/header-back/header-back.component';
import { SideBarBackComponent } from './backoffice/side-bar-back/side-bar-back.component';
import { HomeBackComponent } from './backoffice/home-back/home-back.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddUsersBackComponent } from './back/back/user/add-users-back/add-users-back.component';
import { ListUsersBackComponent } from './back/back/user/list-users-back/list-users-back.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AllBackComponent,
    AllFrontComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    HomeFrontComponent,
    FooterBackComponent,
    HeaderBackComponent,
    SideBarBackComponent,
    HomeBackComponent,
    LoginComponent,
    ForgotpasswordComponent,
    AddUsersBackComponent,
    ListUsersBackComponent,
    ProfileComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

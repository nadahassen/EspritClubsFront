import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFrontComponent } from './frontoffice/all-front/all-front.component';
import { HomeFrontComponent } from './frontoffice/home-front/home-front.component';
import { AllBackComponent } from './backoffice/all-back/all-back.component';
import { HomeBackComponent } from './backoffice/home-back/home-back.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './service/auth-guard.guard';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddUsersBackComponent } from './back/back/user/add-users-back/add-users-back.component';
import { ListUsersBackComponent } from './back/back/user/list-users-back/list-users-back.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {

    

   path: 'front',
   component: AllFrontComponent,canActivate:[AuthGuardGuard],
   children:[
    {
      path:'',
      component:HomeFrontComponent
    }
   ] 
  },
  {
    path: 'back',
    component: AllBackComponent,canActivate:[AuthGuardGuard],
    children:[
      {
        path:'',
        component:HomeBackComponent
      }
    ] 
   },
   {
    path: 'login',
    component: LoginComponent,canActivate:[AuthGuardGuard], 
   },
   {
    path: 'forgotPassword', component: ForgotpasswordComponent ,
  },
  {path: 'AddUsers', component: AddUsersBackComponent},
  {path: 'UsersList', component: ListUsersBackComponent},
  {path: 'profile', component: ProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

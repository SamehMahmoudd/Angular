import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewProfileComponent } from './user-view-profile/user-view-profile.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'viewProfile',component:UserViewProfileComponent ,title:'view profile'},
  {path:'editProfile',component:UserEditProfileComponent ,title:'edit profile'}

]


@NgModule({
  declarations: [
    UserViewProfileComponent,
    UserEditProfileComponent
  ],
  imports: [

  CommonModule,
  RouterModule.forChild(routes)
  ]
})
export class UserModule { }

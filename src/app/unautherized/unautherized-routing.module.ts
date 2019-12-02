import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NewUserComponent} from './new-user/new-user.component';


const routes: Routes = [
  
  { path: 'SingUp', component: NewUserComponent },
  { path: 'Login', component: LoginComponent } 
];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UnautherizedRoutingModule { }

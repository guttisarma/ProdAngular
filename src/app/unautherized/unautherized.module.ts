import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UnautherizedRoutingModule} from "./unautherized-routing.module";
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, NewUserComponent],
  imports: [
    CommonModule,FormsModule,
    UnautherizedRoutingModule
  ]
})
export class UnautherizedModule { }

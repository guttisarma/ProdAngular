import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { UserBillingComponent } from './user-billing/user-billing.component';

@NgModule({
  declarations: [UserDetailComponent, UserListComponent, UserMgmtComponent, UserSettingComponent, UserBillingComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

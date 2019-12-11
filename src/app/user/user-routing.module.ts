import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { UserBillingComponent } from './user-billing/user-billing.component';
import { AuthGuard } from '../unautherized/auth/auth.guard';

const UserRoutes: Routes = [
  {
    path: 'UserManagement',
    component: UserMgmtComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'Detail', component: UserDetailComponent,
        outlet: 'UserMgmt'
      },
      {
        path: 'Settings', component: UserSettingComponent,
        outlet: 'UserMgmt'
      },
      {
        path: 'Billing', component: UserBillingComponent,
        outlet: 'UserMgmt'
      },
      {
        path: 'List', component: UserListComponent,
        outlet: 'UserMgmt'
      }
    ]
  }

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

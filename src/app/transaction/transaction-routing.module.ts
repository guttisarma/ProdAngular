import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransMgmtComponent } from './trans-mgmt/trans-mgmt.component';
import { TransListComponent } from './trans-list/trans-list.component';
import { TransDetailComponent } from './trans-detail/trans-detail.component';
import { AuthGuard } from '../unautherized/auth/auth.guard';

const TransRoutes: Routes = [

  {
    path: 'TransactionManagement', 
    component: TransMgmtComponent,
    canActivate: [AuthGuard],
    children:[
      {path: 'Detail/:id', component: TransDetailComponent,outlet: 'TranMgmt'},
      {path: 'List', component: TransListComponent,outlet: 'TranMgmt'}
    ]
   
  }

];

@NgModule({

  imports: [RouterModule.forChild(TransRoutes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }

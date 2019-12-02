import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransMgmtComponent } from './trans-mgmt/trans-mgmt.component';
import { TransListComponent } from './trans-list/trans-list.component';
import { TransDetailComponent } from './trans-detail/trans-detail.component';

const TransRoutes: Routes = [

  {
    path: 'TransactionManagement', 
    component: TransMgmtComponent,
    children:[
      {path: 'Detail/:id', component: TransDetailComponent},
      {path: 'List', component: TransListComponent}
    ]
   
  }

];

@NgModule({

  imports: [RouterModule.forChild(TransRoutes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }

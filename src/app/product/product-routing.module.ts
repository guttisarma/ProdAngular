import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdNewComponent } from './prod-new/prod-new.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdMgmtComponent } from './prod-mgmt/prod-mgmt.component';
import { ProdAssignComponent } from './prod-assign/prod-assign.component';
import { ProdConvComponent } from './prod-conv/prod-conv.component';
import { AuthGuard } from '../unautherized/auth/auth.guard';

const ProdRoutes: Routes = [
  {
    path: 'ProductManagement',
    component: ProdMgmtComponent,
    canActivate: [AuthGuard],
    children: [
      /* { path: 'New', component: ProdNewComponent,outlet: 'ProdMgmt' }, */
      { path: 'Detail/:id', component: ProdDetailComponent,outlet: 'ProdMgmt' },
      { path: 'List', component: ProdListComponent,outlet: 'ProdMgmt' },
      { path: 'Convert', component: ProdConvComponent,outlet: 'ProdMgmt' },
      { path: 'New', component: ProdNewComponent,outlet: 'ProdMgmt' },
      { path: 'Assign', component: ProdAssignComponent,outlet: 'ProdMgmt' }
    ]
  }

];

@NgModule({

  imports: [RouterModule.forChild(ProdRoutes)],
  exports: [RouterModule]
})


export class ProductRoutingModule { }

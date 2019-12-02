import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProdNewComponent } from './prod-new/prod-new.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdMgmtComponent } from './prod-mgmt/prod-mgmt.component';
import { ProdAssignComponent } from './prod-assign/prod-assign.component';
import { ProdConvComponent } from './prod-conv/prod-conv.component';
const ProdRoutes: Routes = [
  {
    path: 'ProductManagement',
    component: ProdMgmtComponent,
    children: [
      { path: 'NewProduct', component: ProdNewComponent },
      { path: 'Detail/:id', component: ProdDetailComponent },
      { path: 'List', component: ProdListComponent },
      { path: 'ConvertProduct', component: ProdConvComponent },
      { path: 'New', component: ProdNewComponent },
      { path: 'AssignProduct', component: ProdAssignComponent }
    ]
  }

];

@NgModule({

  imports: [RouterModule.forChild(ProdRoutes)],
  exports: [RouterModule]
})


export class ProductRoutingModule { }

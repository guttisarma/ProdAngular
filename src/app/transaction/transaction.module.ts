import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionRoutingModule} from './transaction-routing.module';
import { TransListComponent } from './trans-list/trans-list.component';
import { TransDetailComponent } from './trans-detail/trans-detail.component';
import { TransMgmtComponent } from './trans-mgmt/trans-mgmt.component'
@NgModule({
  declarations: [TransListComponent, TransDetailComponent, TransMgmtComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }

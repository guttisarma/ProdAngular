import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import {UnautherizedModule} from './unautherized/unautherized.module';
import {UserModule} from './user/user.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,    
    ProductModule,
    TransactionModule,
    UnautherizedModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

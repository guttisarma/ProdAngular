import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProdListComponent } from '../prod-list/prod-list.component';
import { ProductService } from '../product.service';
import { ProdHelp,ProdAssignHelp } from '../HelperProd';
import { UserService } from '../../user/user.service';
import { UserHelp, DummylsUseruct } from '../../user/HelperUser';

@Component({
  selector: 'app-prod-assign',
  templateUrl: './prod-assign.component.html',
  styleUrls: ['./prod-assign.component.css']
})
export class ProdAssignComponent implements AfterViewInit {

  lsselectproduct: ProdHelp[] = [];
  lsuser: UserHelp[] = [];
  selectuser: UserHelp;
  myAssignProd:ProdAssignHelp[]=[]

  constructor(private prodservice: ProductService, private userserive: UserService) { }
  ngAfterViewInit() {
  }
  ngOnInit() {
    this.lsselectproduct = this.prodservice.selprod;
    this.prodservice.selprod = undefined;
    this.userserive.getMyUser().subscribe(lsu => {
      this.lsuser.push(lsu);
    });
    this.lsuser = DummylsUseruct;
    this.myAssignProd=this.prodservice.getMyAssignment();
  }
  selectedUser(SelUserHelp: UserHelp) {
    this.selectuser = SelUserHelp;
  }
  removeItem(prod: any) {
    for (var i = 0; i < this.lsselectproduct.length; i++) {
      if (this.lsselectproduct[i].ProdHelpPID === prod.ProdHelpPID) {
        this.lsselectproduct.splice(i, 1);
      }
    }
  }
  getInfo():string{
    if(this.selectuser===undefined)
    return "Select User :";
    else
    return this.selectuser.Name;
  }
  gotoList(){
    
  }
}

import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProdListComponent } from '../prod-list/prod-list.component';
import { ProductService } from '../product.service';
import { ProdHelp, ProdAssignHelp, AssignUsertoProd, lsAssignProdhelper } from '../HelperProd';
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
  myAssignProd: ProdAssignHelp[] = []
  assignusertoprod: AssignUsertoProd;
  lsPostProd: lsAssignProdhelper[] = [];


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
    this.prodservice.getMyAssignment().subscribe(x => this.myAssignProd = x);
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
  getInfo(): string {
    if (this.selectuser === undefined)
      return "Select User :";
    else
      return this.selectuser.Name;
  }
  gotoList() {

  }
  assignProdtoUser() {
    this.lsselectproduct.forEach(element => {
      let temp=new lsAssignProdhelper();
      temp.AssignQuantity=element.AllowedQuantity;
      temp.ProdHelpPID=element.ProdHelpPID;
    this.lsPostProd.push(temp );      
    });
    this.assignusertoprod.UserPID=this.selectuser.UserHelpPID;

    this.prodservice.assignUserToProd(this.assignusertoprod).subscribe(x => console.log(x));
  }
}

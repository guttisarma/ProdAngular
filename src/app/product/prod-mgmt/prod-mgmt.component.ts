import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-mgmt',
  templateUrl: './prod-mgmt.component.html',
  styleUrls: ['./prod-mgmt.component.css']
})
export class ProdMgmtComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoAssign() {
    this.router.navigate(['/ProductManagement/AssignProduct']);
  }
  gotoList() {
    this.router.navigate(['/ProductManagement/List']);
  }
  gotoConvert(){
    this.router.navigate(['/ProductManagement/ConvertProduct']);
  }
  gotoNew(){
    this.router.navigate(['/ProductManagement/New']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ProdHelp,ProdAssignHelp } from '../HelperProd';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-conv',
  templateUrl: './prod-conv.component.html',
  styleUrls: ['./prod-conv.component.css']
})
export class ProdConvComponent implements OnInit {

  lsselectproduct: ProdHelp[] = [];

  constructor(private prodservice: ProductService) { }

  ngOnInit() {
    this.lsselectproduct = this.prodservice.selprod;
    this.prodservice.selprod = undefined;
  }
  createNewProduct(){
    console.log('Servce for new product to be here');
    console.log('After completon return to Product list');
  }
}

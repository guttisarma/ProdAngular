import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-prod-new',
  templateUrl: './prod-new.component.html',
  styleUrls: ['./prod-new.component.css']
})
export class ProdNewComponent implements OnInit {

  constructor() { }
  NewProd = new FormGroup({
    name: new FormControl(Validators.required),
    code: new FormControl(),
    quantity: new FormControl(),
    description: new FormControl(),
  });

  ngOnInit() {
  }
  createNewProduct() {
    console.log(this.NewProd);
    this.NewProd.setValue({code:'NewCodeHere',name:'sasd,sd',quantity:44,description:'sdhsdkjkdsf'});
    this.NewProd.patchValue({code:'NewCodeHere',name:'sasd,sd',quantity:44,description:'sdhsdkjkdsf'});
    console.log('patch values are updated');

  }
}

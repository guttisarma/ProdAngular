import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdHelp } from '../HelperProd';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-prod-new',
  templateUrl: './prod-new.component.html',
  styleUrls: ['./prod-new.component.css']
})
export class ProdNewComponent implements OnInit {

  constructor(private fb: FormBuilder, private productservice: ProductService) { }
  newprod: ProdHelp = new ProdHelp();
  NewProdForm = this.fb.group({
    name: [this.newprod.Name, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    code: [this.newprod.Code],
    quantity: [this.newprod.TQuantity,[Validators.required, Validators.pattern('^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$')]],
    description: [this.newprod.Description, [Validators.required, Validators.maxLength(250)]]
  });

  ngOnInit() {
    this.newprod.Code = 'System Generated';
  }



  createNewProduct() {
    console.log(this.NewProdForm.value);
    /* this.NewProd.setValue({code:'NewCodeHere',name:'sasd,sd',quantity:44,description:'sdhsdkjkdsf'});
    this.NewProdForm.patchValue({name:'sasd,sd',quantity:44,description:'sdhsdkjkdsf'}); 
    console.log('patch values are updated');*/
    if (this.NewProdForm.valid) {
      this.productservice.saveNewProd(this.newprod).subscribe(syscode => this.newprod.Code=syscode);
      console.log(this.NewProdForm.value);
    }

  }
}

import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject, from } from 'rxjs';
import { ProdHelp, ProdAssignHelp, DummylsProdAssign } from './HelperProd';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  selprod: ProdHelp[] = [];

  getMyAssignment(): ProdAssignHelp[] {
    return DummylsProdAssign
  }

}

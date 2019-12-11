import { Injectable } from '@angular/core';
import { TranHelp, DummylsTran } from './HelperTran';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TranService {

  constructor() { }
  getPendingTranList(): Observable<TranHelp[]> {
    return of(DummylsTran);
  }
  getApprovedTranList(): Observable<TranHelp[]> {
    return of(DummylsTran);
  }
}

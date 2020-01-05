import { Injectable } from '@angular/core';
import { DummylsUseruct, UserHelp, dummyuser ,AddressHelp,dummyaddress} from './HelperUser';
import { Observable, of, BehaviorSubject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getMyUser(): Observable<UserHelp> {
    return dummyuser;
  }
  getUserBasicDetails():Observable<UserHelp> {
    return dummyuser;
  }
  getUserAdderss():Observable<AddressHelp>{
    return dummyaddress;
  }

}

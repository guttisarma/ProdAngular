import { Injectable } from '@angular/core';
import {DummylsUseruct,UserHelp,dummyuser} from './HelperUser';
import { Observable, of, BehaviorSubject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getMyUser():Observable<UserHelp>{
      return dummyuser;
  }

}

import { Component, OnInit } from '@angular/core';
import { UserHelp, DummylsUseruct } from '../HelperUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }
  lsuser: UserHelp[] = [];

  ngOnInit() {
    this.lsuser = DummylsUseruct;
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserHelp,AddressHelp } from '../HelperUser';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userservice: UserService) { }
  user: UserHelp;
  address:AddressHelp;
  ngOnInit() {
    this.userservice.getUserBasicDetails().subscribe(x => this.user = x);
    this.userservice.getUserAdderss().subscribe(y=>this.address=y);
  }

}

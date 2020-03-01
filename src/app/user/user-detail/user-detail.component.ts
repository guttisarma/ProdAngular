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
  enabledAddress:boolean;
  ngOnInit() {
    this.enabledAddress=true;
    this.userservice.getUserBasicDetails().subscribe(x => this.user = x);
    this.userservice.getUserAdderss().subscribe(y=>this.address=y);
  }
  EnableEditAddress(){
    if(this.enabledAddress===true)
    this.enabledAddress=false;  
    else{
      this.enabledAddress=true;    
    }  
  }

}

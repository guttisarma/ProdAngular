import { Component, OnInit } from '@angular/core';
import { UserHelp } from '../../user/HelperUser';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor() { }
  NewUser:UserHelp=new UserHelp();
  checkCommAdd:boolean=true;
  ngOnInit() {
  }
  checkedOption(isPhone:number){
    if(isPhone==0){
      console.log('is phone');
      this.checkCommAdd=true;
    }else{
      console.log('is Email');

      this.checkCommAdd=false;

    }
  }
  onSubmit(){
    console.log('newUserForm');
  }

}

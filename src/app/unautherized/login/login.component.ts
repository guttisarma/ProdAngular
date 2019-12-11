import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserName:string;
  Password:string;
  constructor(private authservice:AuthService) { }


  ngOnInit() {
  }
  checkCredentials(){
    this.authservice.login(this.UserName,this.Password)
  }
}

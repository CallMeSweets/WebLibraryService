import { Component, OnInit } from '@angular/core';
import {LoginService} from "../Services/LoginService/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }


  loginUser(email: string, password: string) {
    this.loginService.register({email, password});
  }
}

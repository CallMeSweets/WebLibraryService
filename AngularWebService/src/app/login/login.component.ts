import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../Services/LoginService/login.service";
import {catchError} from "rxjs/operators";
import {SelectComponent} from "../ENUMS/select-component.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private registration = true;

  @Output()
  private emitter = new EventEmitter();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }


  loginUser(email: string, password: string) {

      this.loginService.login({email, password});

  }


  registerToService() {
    this.emitter.emit(SelectComponent.REGISTER);
  }
}

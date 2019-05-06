import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from '../../Services/LoginService/login.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  @Output()
  private emitter = new EventEmitter();

  @Output()
  private emitterEmail = new EventEmitter();

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }


  loginUser(email: string, password: string) {

    this.loginService.login({email, password}).then(() => {
      this.emitterEmail.emit(email);
      this.loginService.changeLoginStatus(true);
      this.router.navigate(['/user', email.substring(0, email.indexOf('@'))]).catch((Error) => {console.log('Navigate Email Error' + Error); });
      this.loginService.emitEmail(email);
    }).catch((Error) => {
      this.loginService.changeLoginStatus(false);
    });


  }


}

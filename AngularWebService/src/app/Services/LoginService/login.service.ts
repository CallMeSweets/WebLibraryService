import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import {User} from 'firebase';



export interface Credentials {
  email: string;
  password: string;

}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;
  
  private loginStatus = true;

  @Output()
  private emmiter = new EventEmitter();

  constructor(private fireAuth: AngularFireAuth) {

  }

  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  login({email, password}: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  emitEmail(email: string) {
    this.emmiter.emit(email);
  }
  
  getEmmiter() {
    return this.emmiter;
  }


  logout() {
    return this.fireAuth.auth.signOut();
  }

  getLoginStatus(): boolean {
    return this.loginStatus;
  }

  changeLoginStatus(status: boolean) {
    this.loginStatus = status;
  }

}

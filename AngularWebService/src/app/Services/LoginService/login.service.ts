import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { AngularFireAuth } from 'angularfire2/auth'
import {User} from "firebase";


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

  constructor(private fireAuth: AngularFireAuth) { }

  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  login({email, password}: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password).then((userData => {
      this.loginStatus = true;
    }))
      .catch((Error) => {
        this.loginStatus = false;
    });
  }

  register({email, password}: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(){
    return this.fireAuth.auth.signOut();
  }

  getLoginStatus(): boolean {
    return this.loginStatus;
}

}

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

  constructor(private fireAuth: AngularFireAuth) { }

  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  login({email, password}: Credentials){
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password).then((userData => {
      console.log(userData);
    }))
      .catch((Error) => {
      console.log(Error);
      console.log(email);
    });
  }

  register({email, password}: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(){
    return this.fireAuth.auth.signOut();
  }

}

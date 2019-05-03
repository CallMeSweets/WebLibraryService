import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LibraryUser} from '../../Interfaces/library-user';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs';
import {Book} from '../../Interfaces/book';
import {User} from 'firebase';
import {Credentials} from '../LoginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(private http: HttpClient, private fireAuth: AngularFireAuth) { }

  registerUser(libraryUser: LibraryUser) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(libraryUser.email, libraryUser.password).then((userData => {
      console.log('Zarejestrowany');
      this.addUserToDB(libraryUser).subscribe(
      (data: LibraryUser) => {
              console.log(data);
            },
            err => {
            console.log('BLAD!');
            console.log(err);
            }
        );
    }))
      .catch((Error) => {
        console.log('Blad rejestracji: ' + Error );
      });
  }


  private addUserToDB(libraryUser: LibraryUser): Observable<LibraryUser> {
    return this.http.post<LibraryUser>('http://localhost:8443/users/add', libraryUser, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }

  // addBookToUser(book: Book): Observable<Book> {
  //   return this.http.post<Book>('http://localhost:8443/users/add/book?userId=95', book, {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json'
  //     })
  //   });
  // }

}

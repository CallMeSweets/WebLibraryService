import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RegisterService} from '../../Services/RegisterService/register.service';
import {LibraryUser} from '../../Interfaces/library-user';
import {passBoolean} from 'protractor/built/util';
import {Book} from '../../Interfaces/book';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output()
  emitter = new EventEmitter();

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  saveTheUser(theFirstName: string, theLastName: string, theEmail: string, thePassword: string, theDateOfBirth: string, thePhoneNumber: string, theFemale: boolean, theMale: boolean) {

    theFemale === true ? theFemale = false : theFemale = true;

    const libraryUser: LibraryUser = {
      firstName: theFirstName,
      lastName: theLastName,
      email: theEmail,
      password: thePassword,
      phoneNumber: thePhoneNumber,
      gender: theFemale,
      birthDate: new Date(theDateOfBirth),
      bookListBorrowedByUser: new Array(),

    };



    this.registerService.registerUser(libraryUser);

    // const book: Book = {
    //   title: 'XXX',
    //   author: 'AAA',
    //   descipriton: 'ZZZ',
    // };
    //
    // this.registerService.addBookToUser(book).subscribe(
    //   (data: Book) => {
    //     console.log(data);
    //   },
    //   err => {
    //     console.log('BLAD BOOK');
    //     console.log(err);
    //   }
    // );
   // location.reload();
  }
}

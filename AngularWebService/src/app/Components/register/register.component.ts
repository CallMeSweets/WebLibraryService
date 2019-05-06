import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RegisterService} from '../../Services/RegisterService/register.service';
import {LibraryUser} from '../../Interfaces/library-user';
import {passBoolean} from 'protractor/built/util';
import {Book} from '../../Interfaces/book';
import {SelectComponent} from "../../ENUMS/select-component.enum";
import {LoginService} from "../../Services/LoginService/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output()
  emitter = new EventEmitter();

  private warningInfo = true;
  private emailInBase = false;

  constructor(private registerService: RegisterService, private  loginService: LoginService) { }

  ngOnInit() {
  }


  saveTheUser(theFirstName: string, theLastName: string, theEmail: string, thePassword: string, theDateOfBirth: string, thePhoneNumber: string, theFemale: boolean, theMale: boolean) {

    this.emailInBase = false;

    if(theFirstName !== '' && theLastName !== '' && theEmail !== '' && thePassword !== '' && theDateOfBirth !== '' && thePhoneNumber !== '' && theMale !== null && theFemale !== null){
      this.warningInfo = true;
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

      this.registerService.registerUser(libraryUser).then( () => {
       // this.registerService.addUserToDB(libraryUser);
        this.emitter.emit(SelectComponent.LOGIN);

      }).catch((Error) => {
        this.emailInBase = true;
        console.log(Error);
      });

    } else {
      this.warningInfo = false;
    }

  }
}

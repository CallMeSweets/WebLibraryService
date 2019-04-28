import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Book} from "../../Interfaces/book";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataLinkerService {

  private bookSearchedListObs = new BehaviorSubject<Array<Book>>([]);

  books$ = this.bookSearchedListObs.asObservable();

  constructor(private http: HttpClient) {

  }


  getBookListObs(sentenceToFindBook: string){

    const parm = new HttpParams().set('filter', sentenceToFindBook);
    this.http.get<Array<Book>>("http://localhost:8443/libraries/books", {params: parm}).subscribe(
      book =>{
        this.bookSearchedListObs.next(book);
        console.log(book);
      },
      err => {
        console.log("ERROR");
      });

  }


}

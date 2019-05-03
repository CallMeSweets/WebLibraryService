import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataLinkerService} from '../../Services/dataLinkerService/data-linker.service';
import {Observable} from 'rxjs';
import {Book} from '../../Interfaces/book';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {


  allBooks$: Observable<Array<Book>>;

  constructor(private linkService: DataLinkerService) {
    this.allBooks$ = this.linkService.books$;
  }

  ngOnInit() {
  }



}

import {Component, Input, OnInit} from '@angular/core';
import {SelectComponent} from '../../ENUMS/select-component.enum';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  @Input()
  private selectedComponent = SelectComponent.MAIN;

  @Input()
  private userEmail: string;

  title = 'WebLibraryAngular';

  ngOnInit() {
  }


  setComponent(selComponent: SelectComponent) {
    this.selectedComponent = selComponent;
    console.log(this.selectedComponent.valueOf());
  }

  setUserEmailToDrop(theUserEmail: string) {
    console.log(theUserEmail);
    this.userEmail = theUserEmail;
  }

}

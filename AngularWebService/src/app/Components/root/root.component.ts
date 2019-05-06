import {Component, Input, OnInit} from '@angular/core';
import {SelectComponent} from '../../ENUMS/select-component.enum';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor() { }

  // @Input()
  // private selectedComponent = SelectComponent.MAIN;
  //
  // @Input()
  // private userEmail: string;
  //
  // title = 'WebLibraryAngular';

  ngOnInit() {
  }


  // setComponent(selComponent: SelectComponent) {
  //   this.selectedComponent = selComponent;
  // }
  //
  // setUserEmailToDrop(theUserEmail: string) {
  //   console.log(theUserEmail);
  //   this.userEmail = theUserEmail;
  // }

}

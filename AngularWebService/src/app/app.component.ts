import {Component, Input} from '@angular/core';
import {SelectComponent} from "./ENUMS/select-component.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input()
  private selectedComponent = SelectComponent.MAIN;



  title = 'WebLibraryAngular';


  setComponent(selComponent: SelectComponent) {
    this.selectedComponent = selComponent;
  }
}

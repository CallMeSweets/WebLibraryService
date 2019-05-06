import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SelectComponent} from "../../ENUMS/select-component.enum";
import {DataLinkerService} from "../../Services/dataLinkerService/data-linker.service";
import {LoginService} from "../../Services/LoginService/login.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  isEntered = false;
  isEntered1 = false;
  isEntered2 = false;
  isEntered3 = false;
  isEntered4 = false;


  private selectedComponent: SelectComponent;

  @Output()
  private emitter = new EventEmitter();

  constructor(private dataLinkerSerive: DataLinkerService, private loginService: LoginService) { }

  ngOnInit() {
  }


  changeColor1() {
    this.isEntered1 = !this.isEntered1;
  }

  changeColor2() {
    this.isEntered2 = !this.isEntered2;
  }

  changeColor3() {
    this.isEntered3 = !this.isEntered3;
  }

  changeColor4() {
    this.isEntered4 = !this.isEntered4;
  }

  changeColor() {
    this.isEntered = !this.isEntered;
  }

  refreshPage() {
    location.reload();
  }



  emitContact() {
    this.selectedComponent = SelectComponent.CONTACT;
    this.emitter.emit(this.selectedComponent);
  }

  emitLogin() {
    this.selectedComponent = SelectComponent.LOGIN;
    this.emitter.emit(this.selectedComponent);
    console.log(this.selectedComponent.valueOf());
  }

  emitSearch(value: string) {
    if(value != ""){
      this.selectedComponent = SelectComponent.DATA;
      this.emitter.emit(this.selectedComponent);
      this.dataLinkerSerive.getBookListObs(value);
    }
  }
}

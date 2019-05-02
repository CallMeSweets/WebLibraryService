import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SelectComponent} from "../ENUMS/select-component.enum";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output()
  emitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitLogin() {
    this.emitter.emit(SelectComponent.LOGIN);
  }
}

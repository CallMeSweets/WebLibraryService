import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
}

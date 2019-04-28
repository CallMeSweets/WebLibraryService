import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LeftComponent } from './left/left.component';
import { MainComponent } from './main/main.component';
import { ImgListComponent } from './img-list/img-list.component';
import {DataComponent} from "./data/data.component";
import {LoginComponent} from "./login/login.component";
import {DataLinkerService} from "./Services/dataLinkerService/data-linker.service";
import {HttpClientModule} from "@angular/common/http";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    NavigationBarComponent,
    LeftComponent,
    MainComponent,
    ImgListComponent,
    DataComponent,
    LoginComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataLinkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

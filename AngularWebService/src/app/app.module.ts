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
import {ContactComponent} from './contact/contact.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from "../environments/environment";
import {LoginService} from "./Services/LoginService/login.service";
import {AuthGuardService} from "./Services/AuthGuard/auth-guard.service";
import {Routes} from "@angular/router";
import {AngularFireAuth} from 'angularfire2/auth';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: LoginComponent,
    canActivate: [AuthGuardService],
    children: []
  },
];
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
    RegisterComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataLinkerService, LoginService, AuthGuardService, AngularFireModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }

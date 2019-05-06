import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './Components/top/top.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { LeftComponent } from './Components/left/left.component';
import { MainComponent } from './Components/main/main.component';
import { ImgListComponent } from './Components/img-list/img-list.component';
import {DataComponent} from "./Components/data/data.component";
import {LoginComponent} from "./Components/login/login.component";
import {DataLinkerService} from "./Services/dataLinkerService/data-linker.service";
import {HttpClientModule} from "@angular/common/http";
import {ContactComponent} from './Components/contact/contact.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from "../environments/environment";
import {LoginService} from "./Services/LoginService/login.service";
import {AuthGuardService} from "./Services/AuthGuard/auth-guard.service";
import {RouterModule, Routes} from "@angular/router";
import {AngularFireAuth} from 'angularfire2/auth';
import { RegisterComponent } from './Components/register/register.component';
import { RootComponent } from './Components/root/root.component';
import { MainPageComponent } from './Components/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'logowanie', component: LoginComponent },

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
    RootComponent,
    MainPageComponent,

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '' , component: MainPageComponent},
      {path: 'user/:name', component: MainPageComponent},
      {path: 'logowanie', component: LoginComponent},
      {path: 'rejestracja', component: RegisterComponent},
      {path: 'kontakt', component: ContactComponent},
    ])
  ],
  providers: [DataLinkerService, LoginService, AuthGuardService, AngularFireModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }

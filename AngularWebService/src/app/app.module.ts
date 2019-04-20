import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LeftComponent } from './left/left.component';
import { MainComponent } from './main/main.component';
import { ImgListComponent } from './img-list/img-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    NavigationBarComponent,
    LeftComponent,
    MainComponent,
    ImgListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

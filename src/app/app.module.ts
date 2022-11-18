import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SuccessalertComponent} from "./SuccessAlert/successalert.component";
import {WarningalertComponent} from "./WarningAlert/warningalert.component";

@NgModule({
  declarations: [
    AppComponent,
    SuccessalertComponent,
    WarningalertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

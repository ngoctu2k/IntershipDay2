import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Cau1Component } from './cau1/cau1.component';
import { Cau2Component } from './cau2/cau2.component';

@NgModule({
  declarations: [
    AppComponent,
    Cau1Component,
    Cau2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

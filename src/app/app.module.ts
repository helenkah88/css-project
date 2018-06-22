import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RequestPageModule } from './request-page/request-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RequestPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

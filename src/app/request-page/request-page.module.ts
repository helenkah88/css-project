import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestPageComponent } from './components/request-page/request-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  	RequestPageComponent
  ],
  declarations: [RequestPageComponent, FaqPageComponent]
})
export class RequestPageModule { }

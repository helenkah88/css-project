import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestPageComponent } from './components/request-page/request-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  	RequestPageComponent
  ],
  declarations: [RequestPageComponent]
})
export class RequestPageModule { }

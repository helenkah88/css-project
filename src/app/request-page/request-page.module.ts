import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestPageComponent } from './components/request-page/request-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { FaqItemComponent } from './components/faq-item/faq-item.component';
import { ImageComponent } from './components/image/image.component';
import { RequestStepComponent } from './components/request-step/request-step.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  	RequestPageComponent
  ],
  declarations: [RequestPageComponent, FaqPageComponent, FaqItemComponent, ImageComponent, RequestStepComponent]
})
export class RequestPageModule { }

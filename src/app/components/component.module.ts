import { NgModule } from '@angular/core';
import { FeedBackComponent } from './feedback/feedback.component';

@NgModule({
  declarations:[
    FeedBackComponent
  ],
  exports:[
    FeedBackComponent
  ]
})
export class ComponentModule { }

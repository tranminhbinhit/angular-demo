import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-route.module';
import { FeedBackComponent } from 'src/app/components/feedback/feedback.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    ComponentModule
  ],
  declarations: [
    ManageProductComponent
  ],
  exports:[
    ManageProductComponent
  ]
})
export class ProductModule { }

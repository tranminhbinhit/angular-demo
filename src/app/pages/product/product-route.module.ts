import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: ManageProductComponent
      },
      { path: ':id', component: ProductDetailComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }

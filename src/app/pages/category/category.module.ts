import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "categories", component: ManageCategoryComponent },
      { path: "categories/:id", component: CategoryDetailComponent },
    ]),
    CommonModule
  ],
  declarations: [
    ManageCategoryComponent,
    CategoryDetailComponent
  ]
})
export class CategoryModule { }

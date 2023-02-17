import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { CdnUrlPipe } from 'src/app/pipes/common.pipe';

@NgModule({
  declarations: [
    RestaurantDetailComponent,
    CdnUrlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: RestaurantsComponent},
      {path: ':id', component: RestaurantDetailComponent},
    ])
  ]
})
export class RestaurantModule { }

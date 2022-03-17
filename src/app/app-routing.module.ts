import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './pages/control/control.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'control', component: ControlComponent},
  { path: 'products', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)},
  { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m=>m.UserModule)},
  { path: 'restaurants', loadChildren: () => import('./pages/restaurant/restaurant.module').then(m=>m.RestaurantModule)},
  { path: 'crypto', loadChildren: () => import('./pages/crypto/crypto.module').then(m=>m.CryptoModule)}
  //{ path: "", redirectTo: "login", pathMatch: "full" },
  //{ path: '**', redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

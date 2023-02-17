import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryModule } from './pages/category/category.module';
import { UserModule } from './pages/user/user.module';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { RestaurantsComponent } from './pages/restaurant/restaurants/restaurants.component';
import { ControlComponent } from './pages/control/control.component';
import { MatSliderModule } from '@angular/material/slider';
import { ComponentModule } from './components/component.module';
import { FeedBackComponent } from './components/feedback/feedback.component';

@NgModule({
  //Khai báo các component
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    LoadingComponent,
    RestaurantsComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CategoryModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //Notification
    SimpleNotificationsModule.forRoot(),
    // material
    MatSliderModule,
    ComponentModule
  ],
  exports:[
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

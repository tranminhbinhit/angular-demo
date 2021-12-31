import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserInfoComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: UserInfoComponent, canActivate: [AuthGuard]},
      {path: 'register', component: RegisterComponent},
    ]),
  ]
})
export class UserModule { }

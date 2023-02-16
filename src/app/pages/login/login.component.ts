import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/auth/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { isEmptyObject, isSuccess } from 'src/app/utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string  = 'demo';
  password: string = '123456';
  constructor(private authService : AuthService, private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.authService.loginUserSession(this.userName, this.password).then((res : any) =>{
      if(isSuccess(res)){
        this.router.navigate(['user']);
        this.commonService.notificationSuccess('Đăng nhập thành công', {timeOut: 1500, title: 'Thông báo'});
      } else {
        this.commonService.notificationError(res?.result?.Message);
        //this.commonService.notificationError('Hệ thống quá tải');
      }
    });
  }
}

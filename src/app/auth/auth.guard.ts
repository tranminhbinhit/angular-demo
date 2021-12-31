import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { isEmptyObject } from '../utils/utils';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, OnInit {
  userInfo = {};
  constructor(protected router: Router, private authService : AuthService) { }

  ngOnInit(): void {
      // this.authService.userInfo$.subscribe(m=>{
      //   this.userCurrent = m;
      // });
  }

  canActivate() : boolean {
    this.userInfo = this.authService.userInfo;
    var user = isEmptyObject(this.userInfo);
      if (user) {
          this.router.navigate(['login']);
          return false;
      }
      return true;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/auth/user.model';
import { LocalStorageService } from './base/local-storage.service';
import { isEmptyObject, isSuccess } from '../utils/utils';
import { RequestService } from './base/request.sevice';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userKey: string = 'user-i';
  public userInfo: any = {};


  private userInfoSubject : BehaviorSubject<any> = new BehaviorSubject<any>({});

  userInfo$: Observable<UserModel> = this.userInfoSubject.asObservable();

  constructor(private localStorage : LocalStorageService, private requestService: RequestService, private commonService: CommonService) { }

  fetchFromLocalStorage(){
    this.userInfo = this.localStorage.getValue<UserModel>(this.userKey);
    this.updateUserInfoService();
      // this.commonService.loadingState(true);
    // this.requestService.get<any>('/app/setting/get').subscribe((data: any) => {
    //   if(isSuccess(data)){
    //     console.log(data.result, 'response setting');
    //     this.commonService.loadingState(false);
    //   }
    // });
  }

  updateUserInfoToStorge(){
    this.localStorage.set(this.userKey, this.userInfo);
  }

  updateUserInfoService() {
    this.userInfoSubject.next(this.userInfo);
  }

  loginUserSession(user: string, pass: string){
    this.commonService.loadingState(true);
    return new Promise(resolve => {
      this.requestService.post<any>('/app/auth/login', { UserName: user, Password: pass}).subscribe((data: any) => {
        if(isSuccess(data)){
          this.userInfo = data.result;
          this.updateUserInfoService();
          this.updateUserInfoToStorge();
        }
        this.commonService.loadingState(false);
        resolve(data);
      });
    })
  }

  logoutUser() : boolean {
    this.userInfo = {};
    this.localStorage.remove(this.userKey);
    this.updateUserInfoService();
    this.updateUserInfoToStorge();
    return isEmptyObject(this.userInfo);
  }
}

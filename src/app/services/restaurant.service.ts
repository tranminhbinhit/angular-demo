import { Injectable } from '@angular/core';
import { isSuccess } from '../utils/utils';
import { RequestService } from './base/request.sevice';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private requestService: RequestService, private commonService: CommonService) { }

  getlistRestaurant(){
    this.commonService.loadingState(true);
    return new Promise(resolve => {
      this.requestService.get<any>('/enow_order_app/restaurant/get').subscribe((data: any) => {
        resolve(data);
        this.commonService.loadingState(false);
      });
    })
  }

  getRestaurantDetail(req: any){
    this.commonService.loadingState(true);
    return new Promise(resolve => {
      this.requestService.get<any>('/enow_order_app/restaurant/detail', req).subscribe((data: any) => {
        resolve(data);
        this.commonService.loadingState(false);
      });
    })
  }
}

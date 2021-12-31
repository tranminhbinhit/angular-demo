import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { getImageCdn, isSuccess } from 'src/app/utils/utils';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  id:number = 0;
  sub: any;
  restaurant: any = {};
  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private commonService: CommonService) {

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(param => {
      this.id = +param['id'];
      this.loadRestaurantDetail();
    })
  }

  loadRestaurantDetail(){
    var req = {restaurantId: this.id};
    this.restaurantService.getRestaurantDetail(req).then((res: any) => {
      if(isSuccess(res)){
        this.restaurant = res.result;
        // this.restaurant.ImageUrl = getImageCdn(this.restaurant.ImageUrl);
        // this.restaurant.ListDishs = this.restaurant.ListDishs.map((m: any)=>{
        //   m.ImageUrl = getImageCdn(m.ImageUrl);
        //   return m;
        // });
        this.loadSeoPage();
      } else {
        this.restaurant = {};
      }
    })
  }

  loadSeoPage(){
    const req = {
      title: this.restaurant.RestaurantName,
      image: getImageCdn(this.restaurant.ImageUrl),
      description: this.restaurant.RestaurantName,
      keyword: this.restaurant.RestaurantName,
    }
    this.commonService.initSeoPage(req);
  }
}

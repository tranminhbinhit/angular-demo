import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { isSuccess } from 'src/app/utils/utils';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  listRestaurant: any = [];
  constructor(private restaurantService: RestaurantService,private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.restaurantService.getlistRestaurant().then((res: any) => {
      if(isSuccess(res)){
        this.listRestaurant = res.result;
        this.loadSeoPage();
      }else {
        this.listRestaurant = [];
      }
    })
  }


  loadSeoPage(){
    this.title.setTitle('Danh sách nhà hàng');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Danh sach nha hang description'
      },
      {
        name: 'keywords',
        content: 'Danh sach nha hang description'
      },
    ])
  }

}

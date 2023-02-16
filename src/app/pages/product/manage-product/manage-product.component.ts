import { ContentObserver, ObserversModule } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  constructor(

  ) { }

  ngOnInit(): void {
  }
  fontRed: string = "red";


}

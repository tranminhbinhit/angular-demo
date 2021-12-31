import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        display: 'block',
        visibility: 'visible',
        opacity: 1,
        transition: 'opacity 0.1s linear'
      })),
      state('closed', style({
        transition: 'visibility 0s 0.1s, opacity 0.1s linear',
        opacity: 0,
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),

    ]),
  ]
})
export class LoadingComponent implements OnInit {
  isLoading = false;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.loading$.subscribe(value=> this.isLoading = value);
  }

  toggle() {
    this.isLoading = !this.isLoading;
  }

}

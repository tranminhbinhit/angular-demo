import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { binance } from 'ccxt';
import { CommonService } from 'src/app/services/common.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { getImageCdn, isSuccess, formatDateTime } from 'src/app/utils/utils';

declare var ccxt: typeof import('ccxt');

@Component({
  selector: 'app-binance',
  templateUrl: './binance.component.html',
  styleUrls: ['./binance.component.scss']
})
export class BinanceComponent implements OnInit {
  sub: any;
  priceChart: any = {};

  reqBinace = {
    // apiKey: '7w0xlQbWYluCaYcrfy9XzmpUd2LVBbwKx14XEReP0XBs92W2dEcSHpDIScamZUs7',
    // secret: 'QCambvbop7SdJXLZqS4E3GuyBJFECRxo7ns0vhywotfhY59kDEaSVAitDHw1KcMp',
    // enableRateLimit: true,
    // setSandboxMode : true,
    // proxy: 'https://cors-anywhere.herokuapp.com/'
  };

  binance = new ccxt.binance(this.reqBinace);

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private commonService: CommonService) {

  }

  ngOnInit(): void {
    this.main();
  }

  //https://testnet.binance.vision/key/generate
  //Tạo binance ảo
  main(){
    //this.binance.setSandboxMode(true);
    //this.binance.proxy = 'https://cors-anywhere.herokuapp.com/';
    this.commonService.loadingState(true);
    this.binance.fetchOHLCV('BTC/USDT', '1m',undefined,20).then(res=>{
      this.priceChart = res.map(m=>{
        return {
          timestamp: formatDateTime(m[0]),
          open: m[1],
          high: m[2],
          low: m[3],
          close: m[4],
          volume: m[5],
        }
      });

      this.commonService.loadingState(false);
    });
  }

  async printBalance(){
    // this.binance['setSandboxMode'](true);
    // const balance = await this.binance.fetchBalance();
    // console.log(balance);
  }
}

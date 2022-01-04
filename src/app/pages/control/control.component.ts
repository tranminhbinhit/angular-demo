import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { suggetValueRange } from 'src/app/utils/utils';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  items:any = [{Id: 1, Value: 'test'}];
  item: number = 1;

  inputValue = 3;
  listSuggetInput:any = [];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.onChangeInputValue();
  }

  ///Loading
  onLoading(){
    this.commonService.loadingState(true);
    setTimeout(() => {
      this.commonService.loadingState(false);
    }, 1000);
  }

  ///Notification
  onNotificationSuccess() {
    this.commonService.notificationSuccess("Thành công");
  }

  onNotificationError() {
    this.commonService.notificationError("Đã có lỗi xảy ra");
  }

  onNotificationWarning() {
    this.commonService.notificationWarning("Chú ý");
  }

  //Select

  onSelectItem(event: any){
    console.log(event);
  }

  onChangeInputValue(){
    this.listSuggetInput = suggetValueRange(this.inputValue).filter((m:number) => m != this.inputValue).slice(0,5);
  }

  onChooseInputValue(item: number){
    this.inputValue = item;
    this.onChangeInputValue();
  }

}

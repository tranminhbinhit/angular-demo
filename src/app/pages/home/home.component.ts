import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  checkoutForm = this.formBuilder.group({
    name: ["", Validators.required],
    address: ''
  });

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngDoCheck() : void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() : void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() : void {

    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() : void {

    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() : void {

    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() : void {
    //Dọn dẹp ngay trước khi Angular hủy chỉ thị hoặc thành phần. Hủy đăng ký Đài quan sát và tách trình xử lý sự kiện để tránh rò rỉ bộ nhớ.
    console.log('ngOnDestroy');
  }

  onSubmit = () => {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    // this.checkoutForm.reset();
    console.log(this.checkoutForm.value, 'form test');
  }

}

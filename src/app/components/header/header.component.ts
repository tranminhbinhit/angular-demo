import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/auth/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userInfo: any = {};
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userInfo$.subscribe(value=> this.userInfo = value);
  }

  onLogout(){
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }
}

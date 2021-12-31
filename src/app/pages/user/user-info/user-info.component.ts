import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/auth/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  listUser: UserModel[] = [];
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

}

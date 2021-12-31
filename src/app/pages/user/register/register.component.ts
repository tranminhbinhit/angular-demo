import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userName: string = '';
  password: string = '';
  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // const result = this.authService.registerUser(this.userName, this.password);
    // this.router.navigate(['login']);
  }

}

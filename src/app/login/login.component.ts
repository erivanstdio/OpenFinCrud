import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  username: string = '';
  keepLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {

    this.authService.login(this.username, this.keepLoggedIn);
    this.router.navigate(['home']);
  }
}

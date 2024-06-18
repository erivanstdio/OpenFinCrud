import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
    keepLoggedIn: new FormControl(false)
  });


  constructor(private authService: AuthService, private router: Router) { }

  login() {

    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      const keepLoggedIn = this.loginForm.get('keepLoggedIn')?.value;

      this.authService.login(username, password, keepLoggedIn);
      this.router.navigate(['home']);
    }
  }
}

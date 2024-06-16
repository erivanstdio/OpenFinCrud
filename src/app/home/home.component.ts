import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    
    const user = this.authService.getUser();

    if (!user) {

      this.router.navigate(['/']);
    }
  }

  logout() {

    this.authService.logout();
    this.router.navigate(['/']);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string, keepLoggedIn: boolean) {

    if (keepLoggedIn) {

      localStorage.setItem('user', username);
    } else {

      sessionStorage.setItem('user', username);
    }
  }

  logout() {

    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
  }

  getUser() {
    
    return localStorage.getItem('user') || sessionStorage.getItem('user');
  }

  constructor() { }
}

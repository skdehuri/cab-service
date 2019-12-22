import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  authChange = new Subject<boolean>();

  constructor(private router: Router) { }

  registerUser(user: any) {
    this.user = { ...user };
    this.authChange.next(true);
  }

  login(user: any) {
    this.user = { ...user };
    this.authChange.next(true);
    this.onSuccess();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getLoggedInUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  onSuccess() {
    this.authChange.next(true);
    this.router.navigate(['/aq-index']);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private authService: AuthService) {
    this.user = {};
  }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login({ ...this.user });
  }


}

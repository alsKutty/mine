import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { mineService } from '../mine.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  defaultDomain = "xxx";

  constructor(private http: HttpClient, private router: Router, private mservice: mineService) {
  }

  loginForm(form: NgForm) {
    this.mservice.loginForm(form);
  }

  ngOnInit() {
    if(this.mservice.userinfo){
      this.router.navigate(['home']);
    }
  }

}

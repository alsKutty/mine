import { Component, OnInit } from '@angular/core';
import { mineService } from '../mine.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn: Observable<boolean>;    

  constructor(private mservice: mineService, private router: Router){

  }
  logout(){
    this.mservice.logout();
  }

  ngOnInit() {
    this.isLoggedIn = this.mservice.isLoggedIn;
  }

}

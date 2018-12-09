import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class mineService { 
 private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable()); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  } 

  private tokenAvailable(): boolean {
    return !!localStorage.getItem('userinfo');
  }
  userinfo = JSON.parse(localStorage.getItem('userinfo'));
  constructor(private http: HttpClient, private router: Router) {    
  }

  getNewsfeed(timestamp){  
    const data = {
      uid: this.userinfo.uid,
      timestamp: timestamp,
      end_limit: 10
    }
    return this.http.post("mm_newsfeed_fetch", data);
  }

  logout(){
    localStorage.removeItem('userinfo');
    this.userinfo = '';
    this.loggedIn.next(false);
    this.router.navigate(['']);
  }

  loginForm(form) {
    const url = "mm_ldap_connect";
    return this.http.post(url, form.value).subscribe(
      (response: Response) => {
        if (response['0']) {
          alert('Wrong username or password.');
          form.controls['password'].reset();
        } else {
          localStorage.setItem("userinfo", JSON.stringify(response));
          this.userinfo = JSON.parse(localStorage.getItem('userinfo'));
          this.loggedIn.next(true);
          this.router.navigate(['home']);
        }
      },
      (error: Error) => {
        console.log(error);
      }
    )
  }
}

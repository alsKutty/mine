import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mineService } from './mine.service';

@Injectable()
export class InterService implements HttpInterceptor{
  constructor(private mservice: mineService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(this.mservice.userinfo){
      const csrftoken = this.mservice.userinfo.csrf_token;
      const clone = req.clone({
        headers : req.headers.set("X-CSRF-Token", csrftoken),
        url : 'https://mine.xxx.com/' + req.url
        });
        return next.handle(clone);
    }else{
      const clone = req.clone({
        url : 'https://mine.xxx.com/' + req.url
        });
      return next.handle(clone);
    }
  }

}

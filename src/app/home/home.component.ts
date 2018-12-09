import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { mineService } from '../mine.service';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activitys: Array<any>;
  name: string;
  sapcode: number;
  userImg: string;
  userLink: string;
  defaultPrivacy: string = 'Public';
  timestamp: number = 0;
  feed: Subscription;

  constructor(private http: HttpClient, private mservice : mineService) { }

  ngOnInit() { 
      this.name = this.mservice.userinfo.first_name + ' ' + this.mservice.userinfo.last_name;
      this.sapcode = this.mservice.userinfo.sap_code;
      this.userImg = this.mservice.userinfo.picture.uri;
      this.userLink = '/user/' + this.mservice.userinfo.uid + '/';
      this.feed = this.mservice.getNewsfeed(this.timestamp).subscribe(
        (response: Response) => {
          console.log(response);
         this.activitys = response['activity'];
         this.timestamp = response['activity'][response['activity'].length - 1].timestamp;
        }
      )
  }

  createpost(form: NgForm){
    const data = {
      uid: this.mservice.userinfo.uid,
      posttext: form.value.posttext,
      privacy: form.value.privacy,
      username: this.mservice.userinfo.name,
      type: 'status',
      nid: 0
    };
    this.http.post("mm_newsfeed_post", data).subscribe(      
      (response: Response) => {
        this.fetch_recentpost(164490, response['nid'], 'wall', 0);
      }
    ) 
  }

  fetch_recentpost(uid, nid, type, pgid){
    const data = {
      uid: uid,
      nid: nid,
      type: type,
      pgid: pgid
    }
    this.http.post('mm_notifypost', data).subscribe(
      (response: Response) => {
       this.activitys.unshift(response['activity'][0]);
      }
    )
  }

  onScroll() {
    this.feed = this.mservice.getNewsfeed(this.timestamp).subscribe(
      (response: Response) => {
       this.activitys = this.activitys.concat(response['activity']);
       this.timestamp = response['activity'][response['activity'].length - 1].timestamp;
      }
    )
  }

  ngOnDestroy(){
    this.feed.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { mineService } from '../mine.service';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {
 leaders : Array<any>;
 count: number;
  constructor(private http: HttpClient, private mservice: mineService) { }

  ngOnInit() {
    const url = 'mm_leaders_data';
    const data = {
      uid: this.mservice.userinfo.uid,
    };
    this.http.post(url, data).subscribe(
      (response: Response) => {
        console.log(response);
        this.leaders = response['data'];
        this.count = response['count']
      },
    )
  }

}

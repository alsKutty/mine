import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mineService } from '../mine.service';

@Injectable()
export class GroupServiceService {
  constructor(private http: HttpClient, private mservice: mineService) { }

  getGroupList(last_val, type) {
    const url = 'mm_group_details';
    const data = {
      uid: this.mservice.userinfo.uid,
      last_val: last_val,
      type: type,
      limit: 10
    };
    return this.http.post(url, data);
  }
}

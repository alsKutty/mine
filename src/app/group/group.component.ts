import { Component, OnInit } from '@angular/core';
import { GroupServiceService } from './group-service.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [GroupServiceService]
})
export class GroupComponent implements OnInit {
  groups: Array<any>;
  manages: Array<any>;
  GlastVal: Number = 0;
  MlastVal: Number = 0;
  Mstatus: Number = 1;
  constructor(private gservice: GroupServiceService) { }

  ngOnInit() {
    this.gservice.getGroupList(this.GlastVal, 'all').subscribe(
      (response: Response) => {
        this.groups = response['group_details'];
        this.GlastVal = response['group_details'][response['group_details'].length - 1].nid;
      }
    )
  }

  fetchmygroup() {
    if (this.Mstatus) {
      this.Mstatus = 0;
      this.gservice.getGroupList(this.MlastVal, 'my').subscribe(
        (response: Response) => {
          if (response) {
            this.manages = response['group_details'];
            this.MlastVal = response['group_details'][response['group_details'].length - 1].nid;
          }
        }
      )
    }
  }

  groupscroll() {
    this.gservice.getGroupList(this.GlastVal, 'all').subscribe(
      (response: Response) => {
        this.groups = this.groups.concat(response['group_details']);
        this.GlastVal = response['group_details'][response['group_details'].length - 1].nid;
      }
    )
  }

  managescroll() {
    this.gservice.getGroupList(this.MlastVal, 'my').subscribe(
      (response: Response) => {
        if (response) {
          this.manages = this.manages.concat(response['group_details']);
          this.MlastVal = response['group_details'][response['group_details'].length - 1].nid;
        }
      }
    )
  }
}

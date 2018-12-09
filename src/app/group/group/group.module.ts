import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from '../group.component';
import { GroupListComponent } from '../group-list/group-list.component';
import { GroupViewComponent } from '../group-view/group-view.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GroupRoutingModule } from '../group-routing/group-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    GroupRoutingModule
  ],
  declarations: [
    GroupComponent,
    GroupListComponent,
    GroupViewComponent
  ]
  
})
export class GroupModule { }

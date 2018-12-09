import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AuthguardGuard } from '../authguard.guard';
import { LeadersComponent } from '../leaders/leaders.component';

const appRoute : Routes = [
  {path: '' , component: LoginComponent },
  {path: 'home', component: HomeComponent, canActivate: [AuthguardGuard]},
  {path:'group', loadChildren: "../group/group/group.module#GroupModule"},
  {path:'leaders', component: LeadersComponent, canActivate: [AuthguardGuard]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

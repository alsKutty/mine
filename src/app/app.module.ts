import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AppComponent } from './app.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InterService } from './inter.service';
import { RoutingModule } from './routing/routing.module';
import { MenuComponent } from './menu/menu.component';
import { LeadersComponent } from './leaders/leaders.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsletterComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    LeadersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    InfiniteScrollModule,
    OrderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

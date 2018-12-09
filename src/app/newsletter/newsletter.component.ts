import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {  
  @Input() activity;
  ngOnInit() {
  }
}

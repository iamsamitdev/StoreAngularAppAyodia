import { fadeInAnimation } from './../../../animations/fadeAnimation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }  
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

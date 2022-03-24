import { fadeInAnimation } from './../../../animations/fadeAnimation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }  
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { fadeInAnimation } from './../../../animations/fadeAnimation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }  
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

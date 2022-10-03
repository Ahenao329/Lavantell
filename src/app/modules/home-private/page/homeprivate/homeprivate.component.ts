import { Component, OnInit } from '@angular/core';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-homeprivate',
  templateUrl: './homeprivate.component.html',
  styleUrls: ['./homeprivate.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class HomeprivateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

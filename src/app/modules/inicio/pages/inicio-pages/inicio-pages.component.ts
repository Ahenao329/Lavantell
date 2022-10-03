import { Component, OnInit } from '@angular/core';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-inicio-pages',
  templateUrl: './inicio-pages.component.html',
  styleUrls: ['./inicio-pages.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class InicioPagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

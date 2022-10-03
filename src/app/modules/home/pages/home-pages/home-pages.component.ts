import { Component, OnInit } from '@angular/core';
import { LoginService } from '@modules/auth/services/login.service';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class HomePagesComponent implements OnInit {

  constructor(public apiauthService: LoginService,) { }

  ngOnInit(): void {
  }
  estadoLogueado(){
    return this.apiauthService.estaLogueado();
  }
}

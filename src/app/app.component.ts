import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '@core/models/usuario';
import { LoginService } from '@modules/auth/services/login.service';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'lavantell';
  load: boolean = false;


  ngOnInit(): void {
    setTimeout(() => {
      this.load = true
    }, 2000)

  }
}

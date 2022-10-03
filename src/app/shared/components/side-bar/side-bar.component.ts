import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '@core/models/usuario';
import { LoginService } from '@modules/auth/services/login.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public _mostrarProfile: boolean = false;
  public sidebarShow: boolean = false;
  title = 'Lavantell';
  

  constructor(private router: Router,
    public apiauthService: LoginService,) { 
    }

  ngOnInit(): void {
  }


  logout(){
    this.apiauthService.Logout()
  }

  estadoLogueado(){
    return this.apiauthService.estaLogueado();
  }

    // toggleSidebar() {
  //   const dom: any = document.querySelector('body');
  // }
  
}

import { Component, OnInit } from '@angular/core';
import { SucursalesModel } from '@core/models/sucursales.model';
import { SucursalesService } from '@modules/sucursales/services/sucursales.service';
import { CookieService } from 'ngx-cookie-service';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-sucursales-page',
  templateUrl: './sucursales-page.component.html',
  styleUrls: ['./sucursales-page.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class SucursalesPageComponent implements OnInit {
  listSucursales: Array<SucursalesModel> = []
  panelOpenState = false;

  constructor( private _sucursalesService: SucursalesService) { }

  ngOnInit(): void {  
    this.obtenerSucursales();
  }


  // obtenerSucursales(){
  //   this._sucursalesService.getSucursales()
  //   .subscribe((data: SucursalesModel[])=> {
  //      this.listSucursales = data 
  //   }, error => {
  //     console.log(error)
  //   }
  //   )
  // }

  obtenerSucursales(){
    this._sucursalesService.getSucursales()
    .subscribe(data=> {
       this.listSucursales = data.data 
    }, error => {
      console.log(error)
    }
    )
  }
}

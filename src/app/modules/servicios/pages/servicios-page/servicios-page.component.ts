import { Component, OnInit } from '@angular/core';
import { NosotrosModel } from '@core/models/nosotros.model';
import { ServiciosModel } from '@core/models/servicios.model';
import { ServiciosService } from '@modules/servicios/services/servicios.service';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-servicios-page',
  templateUrl: './servicios-page.component.html',
  styleUrls: ['./servicios-page.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class ServiciosPageComponent implements OnInit {
listServicios: Array<ServiciosModel> = []
panelOpenState = false;

  constructor(private _serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.obtenerServicios();
  }


  obtenerServicios(){
    this._serviciosService.getListServicios()
    .subscribe((data: ServiciosModel[])=> {
       this.listServicios = data 
    }, error => {
      console.log(error)
    }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { equipoModel } from '@core/models/equipo.model';
import { NosotrosModel } from '@core/models/nosotros.model';
import { NosotrosService } from '@modules/nosotros/services/nosotros.service';
import { pipe } from 'rxjs';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';
import * as dataraw from '../../../../data/equipo.json'


@Component({
  selector: 'app-nosotros-page',
  templateUrl: './nosotros-page.component.html',
  styleUrls: ['./nosotros-page.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class NosotrosPageComponent implements OnInit {
  listNosotros: Array<NosotrosModel> = []
  listEquipo: Array<equipoModel> = []

  // dataEquipo: Array<equipoModel> = []
  constructor(private _nosotrosService: NosotrosService) { }

  ngOnInit(): void {
    // const { data }: any = (dataraw as any).default
    // this.dataEquipo = data
    this.obtenerNosotros();
    this.obtenerEquipos();
  }

  obtenerNosotros(){
    this._nosotrosService.getListNosotros()
    .subscribe((data: NosotrosModel[])=> {
       this.listNosotros = data 
    }, error => {
      console.log(error)
    });
    
  }

  obtenerEquipos(){
    this._nosotrosService.getListEquipo()
    .subscribe((data: equipoModel[])=> {
       this.listEquipo = data 
       console.log('🔴', this.listEquipo);
       
    }, error => {
      console.log(error)
    });
    
  }
  
}

import { Component, OnInit } from '@angular/core';
import { NosotrosModel } from '@core/models/nosotros.model';
import { NosotrosService } from '@modules/nosotros/services/nosotros.service';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-nosotros-page',
  templateUrl: './nosotros-page.component.html',
  styleUrls: ['./nosotros-page.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class NosotrosPageComponent implements OnInit {
listNosotros: Array<NosotrosModel> = []
  constructor(private _nosotrosService: NosotrosService) { }

  ngOnInit(): void {
    this.obtenerNosotros();
  }

  obtenerNosotros(){
    this._nosotrosService.getListNosotros()
    .subscribe((data: NosotrosModel[])=> {
       this.listNosotros = data 
    }, error => {
      console.log(error)
    });
    
  }


  
}

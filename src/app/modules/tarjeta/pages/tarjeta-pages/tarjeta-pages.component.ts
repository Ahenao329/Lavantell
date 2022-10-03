import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardModel } from '@core/models/card.model';
import { TarjetaService } from '@modules/tarjeta/services/tarjeta.service';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-tarjeta-pages',
  templateUrl: './tarjeta-pages.component.html',
  styleUrls: ['./tarjeta-pages.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class TarjetaPagesComponent implements OnInit {
  accion ='Agregar';
  id: number | undefined
  listTarget: Array<CardModel> = []
  form: FormGroup;
  
  constructor(private fb: FormBuilder,
    private _tarjetaService: TarjetaService) {

    this.form = this.fb.group({
      titular: ['',  Validators.required,],
      numeroTarjeta: ['',Validators.compose([
                       Validators.required,  
                      Validators.minLength(6),
                      Validators.maxLength(12)])],
     feachaExpedicion: ['',Validators.compose([
                        Validators.required,  
                      Validators.minLength(5),
                      Validators.maxLength(5)])],
      cvv: ['',Validators.compose([
                      Validators.required,  
                    Validators.minLength(3),
                    Validators.maxLength(3)])],
    })
  }

  ngOnInit(): void {
    this.obtenerTarjetas()
  }

  obtenerTarjetas(){
    this._tarjetaService.getListarJetas()
    .subscribe((data: CardModel[])=> {
      this.listTarget = data 
    }, error => {
      console.log(error)
    }
    )
  }

  guardarTarjeta(){
      const tarjeta: any = {
        titular: this.form.get('titular')?.value,
        numeroTarjeta: this.form.get('numeroTarjeta')?.value,
        feachaExpedicion: this.form.get('feachaExpedicion')?.value,
        cvv: this.form.get('cvv')?.value,
      }

    if(this.id == undefined){
    this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {
      console.log('La tarjeta fue registrada con exito!', 'Tarejeta Registrada')
    this.obtenerTarjetas();
      this.form.reset();
    }, error => {
      console.log(error, 'oppsssssss erorr wey');
    })
    }else{
      tarjeta.id = this.id;
      this._tarjetaService.updateTarjeta(this.id, tarjeta).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        console.log('se actualizo la tarjeta correctamente')
        this.obtenerTarjetas();
      }, error => {
        console.log(error)
      })
    }
    }

  elimarTarjeta(id: number ){
    this._tarjetaService.deleteTarjeta(id).subscribe(data =>{
      console.log('La tarjeta fue eliminada con exito!', 'Tarjeta eliminada')
       this.obtenerTarjetas();
    }, error =>{
      console.log(error)
    })
  }


  editarTarjeta(tarjeta: CardModel){
    this.accion = 'Editar'
    this.id = tarjeta.id;

    this.form.patchValue({
      titular: tarjeta.titular,
      numeroTarjeta: tarjeta.numeroTarjeta,
      feachaExpedicion: tarjeta.feachaExpedicion,
      cvv: tarjeta.cvv

    })
   }

}



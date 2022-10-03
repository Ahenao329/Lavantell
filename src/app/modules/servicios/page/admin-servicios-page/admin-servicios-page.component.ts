import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardModel } from '@core/models/card.model';
import { ServiciosModel } from '@core/models/servicios.model';
import { ServiciosService } from '@modules/servicios/services/servicios.service';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-servicios-page',
  templateUrl: './admin-servicios-page.component.html',
  styleUrls: ['./admin-servicios-page.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class AdminServiciosPageComponent implements OnInit {
  panelOpenState = false;
  listServicios: Array<ServiciosModel> = []
  accion ='Agregar';
  id: number | undefined
  form: FormGroup;


  constructor(private fb: FormBuilder,
    private _serviciosService: ServiciosService,
    public snackBar: MatSnackBar
  ) {

      this.form = this.fb.group({
        titulo: ['',Validators.compose([
                         Validators.required,  
                        Validators.minLength(3),
                        Validators.maxLength(30)])],
       descripcion: ['',Validators.compose([
                          Validators.required,  
                        Validators.minLength(5),
                        Validators.maxLength(300)])],

     });
    }

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

  guardarServicio(){
    const servicio: any = {
      titulo: this.form.get('titulo')?.value,
      descripcion: this.form.get('descripcion')?.value,
    }
    if(this.id == undefined){
      this._serviciosService.saveServicio(servicio).subscribe(data => {
        this.snackBar.open('El servicio fue registrada con exito!','✌️',{
          duration: 2000,
          panelClass: ['blue-snackbar'],
        });
        this.obtenerServicios();
        this.form.reset();
      }, error => {
        this.snackBar.open('El servicio no pudo ser guardado, consulte con el administrador, consulte con el administrador','🔴🔴',{
          duration: 2000,
          panelClass: ['blue-snackbar'],

        });     
       })
      }else{
        servicio.id = this.id;
        this._serviciosService.updateServicio(this.id, servicio).subscribe(data => {
          this.form.reset();
          this.accion = 'Agregar';
          this.id = undefined;
          this.snackBar.open('Se actualizo el servicio correctamente','👌',{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: ['warning']
          });
          this.obtenerServicios();
        }, error => {
          this.snackBar.open('ERROR al intentar actualizar el servicio, consulte con el administrador','🔴🔴',{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: ['warning']
          });       
         })
      }
}

eliminarServicio(id: number ){
  this._serviciosService.deleteServicio(id).subscribe(data =>{
     this.obtenerServicios();
     this.snackBar.open('El servicio fue eliminado con éxito!','🤘',{
      duration: 2000
    });
  }, error =>{
    console.log(error)
    this.snackBar.open('ERROR al intentar el servicio, consulte con el administrador!','🔴🔴',{
      duration: 2000
    });
  })
}

editarServicio(servicio: ServiciosModel){
  this.accion = 'Editar'
  this.id = servicio.id;
  this.form.patchValue({
    titulo: servicio.titulo,
    descripcion: servicio.descripcion,
  })
}

}


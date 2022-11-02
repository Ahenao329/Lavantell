import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SucursalesModel } from '@core/models/sucursales.model';
import { errorMessages, regExps } from '@core/util/Validaciones.service';
import { SucursalesService } from '@modules/sucursales/services/sucursales.service';

@Component({
  selector: 'app-admin-popup-sucursales-page',
  templateUrl: './admin-popup-sucursales-page.component.html',
  styleUrls: ['./admin-popup-sucursales-page.component.css']
})
export class AdminPopupSucursalesPageComponent implements OnInit {
  id: number | undefined
  formLogin: any; 
  errors = errorMessages;
  accion ='Agregar';
  listSucursales: Array<SucursalesModel> = []


  constructor( @Inject(MAT_DIALOG_DATA) public sucursales: SucursalesModel,
  public dialogRef: MatDialogRef<AdminPopupSucursalesPageComponent>,
  private fb: FormBuilder,
  private _sucursalesService: SucursalesService,
  public snackBar: MatSnackBar) { 



  this.formLogin = this.fb.group({
    nombre: ['',Validators.compose([
                      Validators.required,  
                    Validators.maxLength(30)])],
    telefono: ['',Validators.compose([
                  Validators.required,  
                  Validators.minLength(10),
                  Validators.maxLength(10),
                  Validators.pattern(regExps['number'])
                  ])], 
    direccion: ['',Validators.compose([
                      Validators.required,  
                    Validators.maxLength(50)])],
    horario: ['',Validators.compose([
                      Validators.required,  
                    Validators.maxLength(30)])],  
    administrador: ['',Validators.compose([
                      Validators.required,  
                    Validators.minLength(5),
                    Validators.maxLength(300)])], 
        
                    
    });
if(this.sucursales !== null){
  this.id= sucursales.id
  this.formLogin.patchValue({
    nombre: sucursales.nombre,
    telefono: sucursales.telefono,
    direccion: sucursales.direccion,
    horario: sucursales.horario,
    administrador: sucursales.administrador,
  })
}
}

  close() {
      this.dialogRef.close();
}

  ngOnInit(): void {
  }

  guardarSucursales(){
    const sucursal: any = {
      nombre: this.formLogin.get('nombre')?.value,
      telefono: this.formLogin.get('telefono')?.value,
      direccion: this.formLogin.get('direccion')?.value,
      horario: this.formLogin.get('horario')?.value,
      administrador: this.formLogin.get('administrador')?.value,
    }
    if(this.id == undefined){
      this.addSucursales(sucursal);
      } 
      if(this.id !== undefined){
       this.editSucursal(sucursal);
      }  
}


  addSucursales(sucursal: SucursalesModel){
    this._sucursalesService.saveSucursales(sucursal).subscribe(data => {
      this.dialogRef.close();
      this.snackBar.open('La sucursal fue registrada con exito!','✌️',{
        duration: 2000,
        panelClass: ['blue-snackbar'],
      });
      this.formLogin.reset();
    }
    , 
    error => {
      this.dialogRef.close();
      this.snackBar.open('La sucursal no pudo ser guardada correctamente, consulte con el administrador, consulte con el administrador','🔴🔴',{
        duration: 2000,
        panelClass: ['blue-snackbar'],

      });     
     }
     )
}
editSucursal(sucursal: SucursalesModel){
  this.id = this.sucursales.id;
    sucursal.id = this.id;
    this._sucursalesService.updateSucursales(this.id, sucursal).subscribe(data => {
      
      this.formLogin.reset();
      this.accion = 'Editar';
      this.id = undefined;
      this.dialogRef.close();
      this.snackBar.open('Se actualizo la sucursal correctamente','👌',{
        duration: 2000,
        verticalPosition: 'bottom',
        panelClass: ['warning']
      });
      this.formLogin.reset();
    }
    , error => {
      this.dialogRef.close();
      this.snackBar.open('ERROR al intentar actualizar la sucursal, consulte con el administrador','🔴🔴',{
        duration: 2000,
        verticalPosition: 'bottom',
        panelClass: ['warning']
      });       
     }
     )
}


}

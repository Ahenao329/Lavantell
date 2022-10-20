import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NosotrosModel } from '@core/models/nosotros.model';
import { errorMessages } from '@core/util/Validaciones.service';
import { NosotrosService } from '@modules/nosotros/services/nosotros.service';

@Component({
  selector: 'app-admin-popup-nosotros-page',
  templateUrl: './admin-popup-nosotros-page.component.html',
  styleUrls: ['./admin-popup-nosotros-page.component.css']
})
export class AdminPopupNosotrosPageComponent implements OnInit {
  formLogin: any; 
  id: number | undefined
  accion ='Agregar';
  errors = errorMessages;

  constructor(@Inject(MAT_DIALOG_DATA) public nosotros: NosotrosModel,
  public dialogRef: MatDialogRef<AdminPopupNosotrosPageComponent>,
  private fb: FormBuilder,
  private _nosotrosService: NosotrosService,
  public snackBar: MatSnackBar) { 

    this.formLogin = this.fb.group({
        descripcion: ['', Validators.compose([
                          Validators.maxLength(5000)
        ])],
        imagen: ['', Validators.compose([
          Validators.maxLength(5000)
        ])],
    });

    if(this.nosotros !== null){
      this.id= nosotros.id;
      this.formLogin.patchValue({
        descripcion: nosotros.descripcion,
        imagen: nosotros.imagen,

      });
    }

  }

  ngOnInit(): void {
  }


  close() {
  
    this.id= 0;
    this.formLogin.patchValue({
      descripcion: null,
      imagen: null,

    })
  
  this.dialogRef.close();
  }

  guardarNosotros(){
    const nosotros: any = {
      descripcion: this.formLogin.get('descripcion')?.value,
      imagen: this.formLogin.get('imagen')?.value,

    }
    if(this.id == undefined){
      this.addNosotros(nosotros);
      } 
      if(this.id !== undefined){
       this.editNosotros(nosotros);
      }  
  }

  addNosotros(nosotros: NosotrosModel){
    this._nosotrosService.saveNosotros(nosotros).subscribe(data => {
      this.dialogRef.close();
      this.snackBar.open('La seión de nosotros registrada con exito!','✌️',{
        duration: 2000,
        panelClass: ['blue-snackbar'],
      });
      this.formLogin.reset();
    });
  }

  editNosotros(nosotros: NosotrosModel){
    this.id = this.nosotros.id;
    nosotros.id = this.id;
    this._nosotrosService.updateNosotros(this.id, nosotros).subscribe(data => {
      this.formLogin.reset();
      this.accion = 'Editar';
      this.id = undefined;
      this.dialogRef.close();
      this.snackBar.open('Se actualizo la seión de nosotros correctamente','👌',{
        duration: 2000,
        verticalPosition: 'bottom',
        panelClass: ['warning']
      });
      this.formLogin.reset();
    });
}

}

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { equipoModel, equipoRequest } from '@core/models/equipo.model';
import { errorMessages } from '@core/util/Validaciones.service';
import { NosotrosService } from '@modules/nosotros/services/nosotros.service';

@Component({
  selector: 'app-admin-popup-equipo-pages',
  templateUrl: './admin-popup-equipo-pages.component.html',
  styleUrls: ['./admin-popup-equipo-pages.component.css']
})
export class AdminPopupEquipoPagesComponent implements OnInit {
  public archivos: any = []
  id: string| number | undefined
  formLogin: any; 
  errors = errorMessages;
  accion ='Agregar';
  listEquipos: Array<equipoModel> = []
  public previsualizacion: string = '';
  file: any


  
  constructor(@Inject(MAT_DIALOG_DATA) public equipos: equipoModel,
  private sanitizer: DomSanitizer,
  public dialogRef: MatDialogRef<AdminPopupEquipoPagesComponent>,
  private fb: FormBuilder,
  private _nosotrosService: NosotrosService,
  public snackBar: MatSnackBar) { 

    this.formLogin = this.fb.group({
      nombre: ['',Validators.compose([
                        Validators.required,  
                      Validators.maxLength(30)])],
      cargo: ['',Validators.compose([
                    Validators.required,  
                    Validators.minLength(3),
                    Validators.maxLength(30),
                    ])], 
      // foto: ['',Validators.compose([
      //                 Validators.maxLength(150)])],
      facebook: ['',Validators.compose([
                      Validators.maxLength(150)])],  
      intagram: ['',Validators.compose([
                      Validators.maxLength(150)])], 
      twitter: ['',Validators.compose([
                      Validators.maxLength(150)])],                     
      });
      
  if(this.equipos !== null){
    this.id= equipos.id
    this.formLogin.patchValue({
      nombre: equipos.nombre,
      cargo: equipos.cargo,
      foto: equipos.foto,
      facebook: equipos.facebook,
      intagram: equipos.intagram,
      twitter: equipos.twitter,
    })
    }

  }

close() {
  
  this.dialogRef.close();
}
  ngOnInit(): void {

  }

  guardarEquipos(){
    const equipo: any = {
      nombre: this.formLogin.get('nombre')?.value,
      cargo: this.formLogin.get('cargo')?.value,
      // foto: this.archivos[0],
      foto: this.file,
      facebook: this.formLogin.get('facebook')?.value,
      intagram: this.formLogin.get('intagram')?.value,
      twitter: this.formLogin.get('twitter')?.value,
    }



console.log('🤘✌️👌', equipo);

    this.subirArchivo()
    if(this.id == undefined){
      this.addMiembroEquipo(equipo);
      } 
     if(this.id !== undefined){
       this.editSucursal(equipo);
      }  
  }
 
  
  addMiembroEquipo(equipo: equipoRequest){

    this._nosotrosService.saveEquuipo(equipo).subscribe(data => {
      this.dialogRef.close();
      this.snackBar.open('La sucursal fue registrada con exito!','✌️',{
        duration: 2000,
        panelClass: ['blue-snackbar'],
      });
      this.formLogin.reset();
    });
  }


  editSucursal(equipo: equipoModel){
    this.id = this.equipos.id;
    equipo.id = this.id;
      this._nosotrosService.updateEquipo(this.id, equipo).subscribe(data => {
        
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

       )
  }

  async compress(event: any) {
    // console.log('🔴🔴',event.target.files);
    const fileName: string = event.target.files[0];
    this.file = event.target.files[0];
    this.archivos.push(fileName)
    this.extraerBase64(fileName).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);
    })
      this.archivos.push(fileName)
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
  
    } catch (e) {
    }
  })

  subirArchivo(): any {
    try{
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo: string | Blob) => {
        formularioDeDatos.append('files', archivo);
        console.log('🤍🤍',archivo);

      });
    }
    catch{

    }
  }
}


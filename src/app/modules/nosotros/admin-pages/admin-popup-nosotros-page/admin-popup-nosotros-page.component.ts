import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { NosotrosModel, NosotrosRequest } from '@core/models/nosotros.model';
import { errorMessages } from '@core/util/Validaciones.service';
import { NosotrosService } from '@modules/nosotros/services/nosotros.service';

@Component({
  selector: 'app-admin-popup-nosotros-page',
  templateUrl: './admin-popup-nosotros-page.component.html',
  styleUrls: ['./admin-popup-nosotros-page.component.css']
})
export class AdminPopupNosotrosPageComponent implements OnInit {
  public archivos: any = []
  formLogin: any; 
  id: number | undefined
  accion ='Agregar';
  errors = errorMessages;
  public previsualizacion: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public nosotros: NosotrosModel, 
  private sanitizer: DomSanitizer,
  public dialogRef: MatDialogRef<AdminPopupNosotrosPageComponent>,
  private fb: FormBuilder,
  private _nosotrosService: NosotrosService,
  public snackBar: MatSnackBar) { 

    this.formLogin = this.fb.group({
        descripcion: ['', Validators.compose([
                          Validators.maxLength(5000)
        ])],
        // imagen: ['', Validators.compose([
        //   Validators.maxLength(5000)
        // ])],
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
  this.dialogRef.close();
  }

  guardarNosotros(){
    const formularioDeDatos = new FormData();

    // this.archivos.forEach(archivo => {
    //   formularioDeDatos.append('files', archivo)
    // })

    const nosotros: any = {
      descripcion: this.formLogin.get('descripcion')?.value,
      imagen: this.archivos[0],
      
      // imagen: this.formLogin.get('imagen')?.value,
    }
    console.log(nosotros);

    // let request: NosotrosRequest
    

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

async compress(event: any) {
  console.log('🔴🔴',event.target.files);
  
  // if (event.target.files && event.target.files[0]) {

    let fileName: string = event.target.files[0];
    this.archivos.push(fileName)
    this.extraerBase64(fileName).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);

    })
    this.archivos.push(fileName)
    // let fileName: string = event.target.files[0].name;
    // var temp = fileName.split(".");
      // let extension: string = temp[temp.length - 1];
      // extension = extension.toLowerCase();

      // var extensionesArchivosCaja = this.extensionesArchivosCaja.split(",")
      // let valido: boolean = false;
      // extensionesArchivosCaja.forEach(element => {
      //     if (extension == element) {
      //         valido = true;
      //     }
      // });
      // if (!valido) {
      //     this.mostrarErrorSnackBar('Extensión no permitida. Solo se permite ' + this.extensionesArchivosCaja);
      //     return;
      // }

      let fileBase64;


      var reader = new FileReader();
      reader.onload = (eventInt: ProgressEvent) => {
          fileBase64 = (<FileReader>eventInt.target).result;
          this.archivos.archivoBase64 = fileBase64;


          // this.blockUI.stop();
      }

      // reader.onerror = error => {
          // this.blockUI.stop();
          // this.manejoExcepcionLocal(error);
      // }

      // this.modelo.archivoNombreFrontTemp = event.target.files[0].name;
      // this.extensionesArchivosCaja = event.target.files[0].name;
      // reader.readAsDataURL(event.target.files[0]);
      // let nombreIcono = "done"
  // }
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



}




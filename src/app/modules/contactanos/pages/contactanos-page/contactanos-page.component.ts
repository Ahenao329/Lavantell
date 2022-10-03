import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactanosModel } from '@core/models/contactanos.model';
import { ContactanosService } from '@modules/contactanos/services/contactanos.service';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';

import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-contactanos-page',
  templateUrl: './contactanos-page.component.html',
  styleUrls: ['./contactanos-page.component.css'],
  animations: [routerTransition(), slideInAnimation]
})
export class ContactanosPageComponent implements OnInit {
  form: FormGroup;
  listTarget: Array<ContactanosModel> =  [];
    load: boolean = true;

  constructor(
    private toastr: ToastrService,
    private formContactos: FormBuilder,
    private _contactanosService: ContactanosService,
    ) {

      this.form= this.formContactos.group({
        nombre:  ['',Validators.compose([
                      Validators.required,  
                    Validators.minLength(6),
                    Validators.maxLength(40)])],
        telefono: ['',Validators.compose([
                         Validators.required,  
                        Validators.minLength(6),
                        Validators.maxLength(12)])],
        correo: ['',Validators.compose([
                          Validators.required, 
                          Validators.email,
                        Validators.minLength(5),
                        Validators.maxLength(50)])],
        direccion: ['',Validators.compose([
                      Validators.minLength(9),
                      Validators.maxLength(30)])],
       ciudad: ['',Validators.compose([
                      Validators.minLength(3),
                      Validators.maxLength(30)])],
        mensaje: ['',Validators.compose([
                        Validators.required,  
                      Validators.maxLength(300)])],
        recaptchaReactive: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }



  guardarContacto(){
    this.load = false;
    const contacto: any = {
      nombre: this.form.get('nombre')?.value,
      telefono: this.form.get('telefono')?.value,
      correo: this.form.get('correo')?.value,
      direccion: this.form.get('direccion')?.value,
      ciudad: this.form.get('ciudad')?.value,
      mensaje: this.form.get('mensaje')?.value,
    }
    this._contactanosService.saveContactanos(contacto).subscribe(data => {
      this.toastr.success('Registro exitoso, pronto atenderemos su solicitud!', 'Contacto Registrado!', {
        timeOut: 5000,
      });
      this.load = true
      this.form.reset();
    }, error => {
      this.toastr.error('Ops algo salio mal, revisa tu conexión o intentalo mas tarde!', 'Registro fallido!', {
        timeOut: 5000,
      });
      this.load = true
    });
  }
}

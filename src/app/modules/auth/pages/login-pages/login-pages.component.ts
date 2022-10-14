import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@modules/auth/services/login.service';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { errorMessages, regExps } from '@core/util/Validaciones.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class LoginPagesComponent implements OnInit {
  load: boolean = true;
  errorSession: boolean = false
  formLogin: any; 
  errors = errorMessages;


  constructor(private fb: FormBuilder,
    public apiauth: LoginService,
    private router: Router,
    public snackBar: MatSnackBar,){
   if(this.apiauth.usuarioData){
     this.router.navigate(['/','private']);

   }
 }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['',Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
        Validators.pattern(regExps['email'])
  ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
    ])]
      });
  }


  login() {
    this.load = false;
    this.apiauth.login( this.formLogin.value).subscribe(response =>{
        if(response.exito==1){
          this.load = true;
              this.router.navigate(['/','private']);
        }
    },
    err => {
      this.load = true;
          this.snackBar.open('Ocurrio error con tu email o password!','🔴🔴',{
      duration: 2000,
      panelClass: ['blue-snackbar'],
    });


    });
    
}
// marcarControlesParaValidacion(userForm: FormGroup) {
//   try {
//     (<any>Object).values(userForm.controls).forEach(constrol => {
//       control.markAsTouched();
//       control.markAsDirty();
//     });
//   } catch (error) {
//   }
// }

// async onLoggedin() {
//   this.marcarControlesParaValidacion(this.formLogin);
//   if (this.formLogin.valid) {
//       this.blockUI.start();
//       try {
//           Object.assign(this.usuario, this.formLogin.value);
//           await this._usuarioLoginService.login(this.usuario, true);//Que guarde credenciales en localStorage, solo si es desarrollo

//           this.router.navigate(['/' + AppConfig.routes.Inicio]);
//       }
//       catch (e) {
//           this.manejoExcepcion(e);
//       } finally {
//           this.blockUI.stop();
//       }
//   }
}

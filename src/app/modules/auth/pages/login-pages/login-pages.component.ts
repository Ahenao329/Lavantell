import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@modules/auth/services/login.service';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class LoginPagesComponent implements OnInit {
  load: boolean = true;
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});

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
        Validators.email
  ])],
      password: ['', Validators.required]
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


}

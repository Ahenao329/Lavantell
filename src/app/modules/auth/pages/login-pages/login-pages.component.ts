import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@modules/auth/services/login.service';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class LoginPagesComponent implements OnInit {

  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    public apiauth: LoginService,
    private router: Router){
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
    this.apiauth.login( this.formLogin.value).subscribe(response =>{
        if(response.exito==1){
              this.router.navigate(['/','private']);
        }
    },
    err => {
      this.errorSession = true
    console.log('Ocurrio error con tu email o password ')
    });

}


}

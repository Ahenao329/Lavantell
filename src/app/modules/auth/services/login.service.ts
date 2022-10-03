import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '@core/models/usuario';
import { Response } from '@core/models/response';
import { login } from '@core/models/login';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, map, Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'https://localhost:44343/api/User/login';
  token = ''

  private usuarioSubjects: BehaviorSubject<Usuario> = new BehaviorSubject ({email:'', token: ''})
  public usuario: Observable<Usuario> = new Observable

  public get usuarioData(): Usuario { return this.usuarioSubjects.value;}

  constructor(private http: HttpClient,
    private cookie: CookieService) { 
      this.usuarioSubjects = new BehaviorSubject<any>( this.cookie.getAll())
      this.usuario = this. usuarioSubjects.asObservable();
    }


    login(login : login): Observable<Response> {
      return this.http.post<Response>(this.url,login,httpOption).pipe(
  map(res => {
        if(res.exito   === 1){
          const usuario: Usuario = res.data;
          console.log('Session iniciada correctamente', 'ResponseOK');
          this.token = usuario.token
          this.cookie.set('token',this.token, 0.01, 'http://localhost:4200/private', 'localhost', true, 'Strict' ) 

         // localStorage.setItem('usuario', JSON.stringify(usuario));
          // this.usuarioSubjects.next(usuario);
        }
        return res;
      })
      );
  }

  estaLogueado(){
    return this.cookie.get("token")
  }

  Logout(){
    this.cookie.deleteAll()
  }

  // logout(): boolean{

  //   localStorage.removeItem('usuario');
  //   this.usuarioSubjects.next({email:'', token: ''})
  //   this.cookie.deleteAll();
  //   if(this.usuarioSubjects) {
  //     return  true
  //    }
  //    return false
  // }
}

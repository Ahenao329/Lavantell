import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private readonly URL = environment.api;

private myAppUrl= 'https://localhost:44343/'
private myApiUrl= 'api/tarjeta/'
  constructor(private http: HttpClient) { } 

  getListarJetas() :Observable<any>{
    return this.http.get(`${this.URL}/tarjeta`)
  }

  deleteTarjeta(id:number): Observable<any>
  {
    return this.http.delete(`${this.URL}/tarjeta/` + id)
  }

  saveTarjeta(tarjeta: any): Observable<any> {
    // return this.http.post(`${this.URL}/tarjeta/`, tarjeta)
    return this.http.post(this.myAppUrl + this.myApiUrl, tarjeta)
  }

  updateTarjeta(id: number, tarjeta: any){
    return this.http.put(`${this.URL}/tarjeta/` + id, tarjeta)
  }
}

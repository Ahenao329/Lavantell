import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  getListServicios():Observable<any>{
    return this.http.get(`${this.URL}/servicios`)

  }
  deleteServicio(id:number): Observable<any>
  {
    return this.http.delete(`${this.URL}/servicios/` + id)
  }

  saveServicio(servicio: any): Observable<any> {
    return this.http.post(`${this.URL}/servicios/`, servicio)
  }

  updateServicio(id: number, servicio: any){
    return this.http.put(`${this.URL}/servicios/` + id, servicio)
  }

}

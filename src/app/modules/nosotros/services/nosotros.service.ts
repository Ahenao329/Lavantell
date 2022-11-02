import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '@core/models/response';
import { FormUtil } from '@core/util/form.util';
import { equipoModel, equipoRequest } from '@core/models/equipo.model';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  getListEquipo():Observable<any>{
    return this.http.get(`${this.URL}/Equipo`)

  }
  
  getListNosotros():Observable<any>{
    return this.http.get(`${this.URL}/nosotros`)

  }

  deleteNosotros(id:number): Observable<any>
  {
    return this.http.delete(`${this.URL}/nosotros/` + id)
  }

  deleteEquipo(id:number): Observable<any>
  {
    return this.http.delete(`${this.URL}/equipo/` + id)
  }

  saveNosotros(nosotros: any): Observable<any> {
    const formData = FormUtil.buildFormData(nosotros);
    return this.http.post(`${this.URL}/nosotros/`, formData)
  }

  saveEquuipo(equipo: equipoRequest) {
    console.log('................',equipo);
    const formData = FormUtil.buildFormData(equipo);
    console.log('dd',formData);
    return this.http.post<equipoModel>(`${this.URL}/Equipo/`, formData)
  }

  updateNosotros(id: number, nosotros: any): Observable<Response>{
    const formData = FormUtil.buildFormData(nosotros);
    return this.http.put<Response>(`${this.URL}/nosotros/` + id, formData, httpOption)
  }

  updateEquipo(id: number, equipo: any): Observable<Response>{
    const formData = FormUtil.buildFormData(equipo);
    return this.http.put<Response>(`${this.URL}/Equipo/` + id, formData, httpOption)
  }
}

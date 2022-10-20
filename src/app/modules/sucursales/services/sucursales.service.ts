import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '@core/models/response';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
private readonly URL = environment.api
  constructor(private http: HttpClient) { }


  getSucursales():Observable<Response>  {
    return this.http.get<Response>(`${this.URL}/sucursales`)
  }
  
  // getSucursales2(term: string):Observable<Response>  {
  //   return this.http.get<Response>(`${this.URL}/sucursales?src=${term}`)
  // }

  deleteSucursales(id:number): Observable<any>
  {
    return this.http.delete(`${this.URL}/sucursales/` + id)
  }

  saveSucursales(sucursal: any): Observable<any> {
    return this.http.post(`${this.URL}/sucursales/`, sucursal)
  }

  updateSucursales(id: number, sucursal: any): Observable<Response>{
    return this.http.put<Response>(`${this.URL}/sucursales/` + id, sucursal, httpOption)
  }

  // add(sucursal: SucursalesModel): Observable<Response>{
  //   return this.http.post<Response>(`${this.URL}/sucursales/`, sucursal, httpOption);
  // }




  // edit(sucursal: SucursalesModel): Observable<Response>{
  //   return this.http.put<Response>(`${this.URL}/sucursales/`, sucursal, httpOption);
  // }

  // delete(id: number): Observable<Response>{
  //   return this.http.delete<Response>(`${this.URL}/${id}`);
  // }
}

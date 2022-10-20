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
export class NosotrosService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  getListNosotros():Observable<any>{
    return this.http.get(`${this.URL}/nosotros`)

  }

  deleteNosotros(id:number): Observable<any>
  {
    return this.http.delete(`${this.URL}/nosotros/` + id)
  }

  saveNosotros(nosotros: any): Observable<any> {
    return this.http.post(`${this.URL}/nosotros/`, nosotros)
  }

  updateNosotros(id: number, nosotros: any): Observable<Response>{
    return this.http.put<Response>(`${this.URL}/nosotros/` + id, nosotros, httpOption)
  }
}

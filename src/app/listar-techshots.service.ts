import { TechShot } from './cadastrar-techshots/techshot-models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarTechshotsService {

  techshotsUrl = 'http://localhost:3000/api/v1/techshots';

  constructor( private http: HttpClient ) { }

  listarTechShosts() {
    return this.http.get<any[]>(`${this.techshotsUrl}`);
  }

  getAll() {
    return this.http.get<TechShot[]>(this.techshotsUrl);
  }

  getById(id: number) {
    return this.http.get<TechShot>(this.techshotsUrl + '/' + id);
  }
}

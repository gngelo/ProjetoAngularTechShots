import { TechShot } from './../cadastrar-techshots/techshot-models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditarService {

  techshotsUrl = 'http://localhost:3000/api/v1/techshots';

  constructor( private http: HttpClient ) { }

  update(techshot: TechShot) {
    return this.http.put(this.techshotsUrl + '/' + techshot.id, TechShot);
  }

  delete(id: number) {
    return this.http.delete(this.techshotsUrl + '/' + id);
  }
}

import { TechShot } from './techshot-models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  techshotsUrl = 'http://localhost:3000/api/v1/techshots';

  constructor( private http: HttpClient ) { }

  create(tecshot: TechShot) {
    return this.http.post(this.techshotsUrl, tecshot);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  usuariosUrl = 'http://localhost:8086/api/v1/usuarios';

  constructor( private http: HttpClient ) { }

  logarGet(logar: any) {
    return this.http.get( this.usuariosUrl, logar);
  }
}

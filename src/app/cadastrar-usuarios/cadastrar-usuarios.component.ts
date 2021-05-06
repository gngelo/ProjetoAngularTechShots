
import { Usuario } from './usuario-models';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css']
})
export class CadastrarUsuariosComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor() { }

  ngOnInit() {
  }

  cadastrarUsuario() {
    console.log(this.usuario);
  }


}

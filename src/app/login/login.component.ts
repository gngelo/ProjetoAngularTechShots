import { ListarUsuariosService } from './listar-usuarios.service';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './../cadastrar-usuarios/usuario-models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  listausuarios: Array<any>;

  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.fazerLogin();
  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }
}

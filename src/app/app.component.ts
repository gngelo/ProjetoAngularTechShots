import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techShots';

  mostrarMenu = false;
  mostrarCriar = false;
  mostrarVotar = false;
  mostrarListar = false;
  mostrarEditar = false;
  mostrarCadUsu = false;

  constructor( private authService: AuthService ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    this.authService.mostrarCriarEmitter.subscribe(
      mostrar => this.mostrarCriar = mostrar
    );
    this.authService.mostrarVotarEmitter.subscribe(
      mostrar => this.mostrarVotar = mostrar
    );
    this.authService.mostrarListarEmitter.subscribe(
      mostrar => this.mostrarListar = mostrar
    );
    this.authService.mostrarEditarEmitter.subscribe(
      mostrar => this.mostrarEditar = mostrar
    );
    this.authService.mostrarCadUsuEmitter.subscribe(
      mostrar => this.mostrarCadUsu = mostrar
    );
  }
}

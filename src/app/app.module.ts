import { EditarService } from './editar-techshots/editar.service';
import { ListarUsuariosService } from './login/listar-usuarios.service';
import { AuthGuards } from './guards/auth.guards';
import { FormsModule } from '@angular/forms';
import { AuthService } from './login/auth.service';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VotarTechshotsComponent } from './votar-techshots/votar-techshots.component';
import { ListarTechshotsService } from './listar-techshots.service';
import { ListarTechshotsComponent } from './listar-techshots/listar-techshots.component';
import { LoginComponent } from './login/login.component';
import { CadastrarUsuariosComponent } from './cadastrar-usuarios/cadastrar-usuarios.component';
import { CadastrarTechshotsComponent } from './cadastrar-techshots/cadastrar-techshots.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { EditarTechshotsComponent } from './editar-techshots/editar-techshots.component';


@NgModule({
  declarations: [
    AppComponent,
    VotarTechshotsComponent,
    ListarTechshotsComponent,
    LoginComponent,
    CadastrarUsuariosComponent,
    CadastrarTechshotsComponent,
    HomeComponent,
    EditarTechshotsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [
    ListarTechshotsService,
    AuthService,
    AuthGuards,
    ListarUsuariosService,
    EditarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

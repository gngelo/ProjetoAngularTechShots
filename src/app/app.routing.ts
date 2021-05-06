import { EditarTechshotsComponent } from './editar-techshots/editar-techshots.component';
import { HomeComponent } from './home/home.component';
import { AuthGuards } from './guards/auth.guards';
import { AppComponent } from './app.component';
import { CadastrarUsuariosComponent } from './cadastrar-usuarios/cadastrar-usuarios.component';
import { ListarTechshotsComponent } from './listar-techshots/listar-techshots.component';
import { VotarTechshotsComponent } from './votar-techshots/votar-techshots.component';
import { CadastrarTechshotsComponent } from './cadastrar-techshots/cadastrar-techshots.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
    { path: 'listar-techshots', component: ListarTechshotsComponent, canActivate: [AuthGuards]},
    { path: 'votar-techshots', component: VotarTechshotsComponent, canActivate: [AuthGuards]},
    { path: 'editar-techshots', component: EditarTechshotsComponent, canActivate: [AuthGuards]},
    { path: 'cadastrar-techshots', component: CadastrarTechshotsComponent, canActivate: [AuthGuards]},
    { path: 'cadastrar-usuarios', component: CadastrarUsuariosComponent},
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuards]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

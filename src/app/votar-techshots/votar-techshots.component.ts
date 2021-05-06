
import { Component, OnInit } from '@angular/core';
import { ListarTechshotsService } from './../listar-techshots.service';

@Component({
  selector: 'app-votar-techshots',
  templateUrl: './votar-techshots.component.html',
  styleUrls: ['./votar-techshots.component.css']
})
export class VotarTechshotsComponent implements OnInit {

  // mockLista = [
  //   {
  //     titulo: 'lista',
  //     descricao: 'lista, lista, lista',
  //     palestrante: 'antonio',
  //     id: 1
  //   },
  //   {
  //     titulo: 'liskkkkkkkkkkta',
  //     descricao: 'litudokkkkkkkkkksta, lista, lista',
  //     palestrante: 'jose',
  //     id: 2
  //   },
  //   {
  //     titulo: 'lista',
  //     descricao: 'lista, lista, lista',
  //     palestrante: 'antonio',
  //     id: 3
  //   },
  //   {
  //     titulo: 'liskkkkkkkkkkta',
  //     descricao: 'litudokkkkkkkkkksta, lista, lista',
  //     palestrante: 'jose',
  //     id: 4
  //   }
  // ];

  listatechshots: Array<any>;

  constructor( private listarTechshotsService: ListarTechshotsService) { }

  ngOnInit() {
    this.listar();
  }

  // listar todas as techshots para serem votada
  listar() {
    this.listarTechshotsService.listarTechShosts().subscribe(dados => this.listatechshots = dados);
  }

  // vota na techshot preferida
  votarTech() {}

}

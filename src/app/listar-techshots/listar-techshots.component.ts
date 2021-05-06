import { ListarTechshotsService } from './../listar-techshots.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-techshots',
  templateUrl: './listar-techshots.component.html',
  styleUrls: ['./listar-techshots.component.css']
})
export class ListarTechshotsComponent implements OnInit {

  listatechshots: {};

  constructor( private listarTechshotsService: ListarTechshotsService ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.listarTechshotsService.listarTechShosts().subscribe(dados => this.listatechshots = dados);
  }

}

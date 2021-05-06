import { EditarService } from './editar.service';
import { ListarTechshotsService } from './../listar-techshots.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-techshots',
  templateUrl: './editar-techshots.component.html',
  styleUrls: ['./editar-techshots.component.css']
})
export class EditarTechshotsComponent implements OnInit {

  listatechshots: Array<any>;

  constructor( private listarTechshotsService: ListarTechshotsService, editarService: EditarService ) { }

  ngOnInit() {
    console.log(this.listar());
  }

  listar() {
    this.listarTechshotsService.listarTechShosts().subscribe(dados => this.listatechshots = dados);
  }

  editarTechShot() {}

  apagarTechShot() {}

}

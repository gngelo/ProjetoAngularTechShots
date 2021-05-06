import { Component, OnInit } from '@angular/core';
import { TechShot } from './techshot-models';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastrar-techshots',
  templateUrl: './cadastrar-techshots.component.html',
  styleUrls: ['./cadastrar-techshots.component.css']
})
export class CadastrarTechshotsComponent implements OnInit {

  private techShot: TechShot = new TechShot();

  constructor( private cadastroService: CadastroService) { }

  ngOnInit() {
    this.cadastrarTechShots();
    console.log(this.techShot);
  }

  // cadastro de tech shots
  cadastrarTechShots() {
    this.cadastroService.create(this.techShot);
  }

  // cancelamento de cadastro tech shots
  cancelarCadastro() {}

}

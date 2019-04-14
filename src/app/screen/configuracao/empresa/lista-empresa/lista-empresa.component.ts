import { Component, OnInit } from '@angular/core';

import { EmpresaService } from '../empresa.service';

import { EmpresaListaViewModel } from '../empresa.viewmodel';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.scss']
})
export class ListaEmpresaComponent implements OnInit {

  empresas: EmpresaListaViewModel[];
  itens: any;

  constructor(
    private empresa: EmpresaService
  ) { }

  ngOnInit() {
    this.empresa.obterEmpresas()
      .then((empresas: any) => {
        this.empresas = empresas;
      })
      .catch((param: any) => {
        console.log(param)
      })
  }

}

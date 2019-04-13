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

  constructor(
    private empresa: EmpresaService
  ) { }

  ngOnInit() {
    this.empresa.obterEmpresas().subscribe(data => {
      data.map(f => {
           return this.empresas =  Object.assign(new EmpresaListaViewModel(), f);
      });
    });
  }

}

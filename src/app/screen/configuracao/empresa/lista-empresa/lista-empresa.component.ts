import { Component, OnInit } from '@angular/core';

import { EmpresaService } from '../empresa.service';

import { EmpresaListaViewModel } from '../empresa.viewmodel';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.scss']
})
export class ListaEmpresaComponent implements OnInit {

  empresas : any = [];
  itens: any;

  constructor(
    private empresa: EmpresaService
  ) { }

  ngOnInit() {
    this.empresa.obterEmpresas()
      .then((empresa: any) => {        
          this.empresas = empresa
       
      })
      .catch((param: any) => {
        console.log(param)
      });

      console.log(this.empresas)
  }

}

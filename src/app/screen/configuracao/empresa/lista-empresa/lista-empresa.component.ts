import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private empresa: EmpresaService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
    this.obterEmpresas();
  }

  obterEmpresas() {
    this.empresas = [];
    this.empresa.obterEmpresas().subscribe((data: {}) => {
      console.log(data);
      this.empresas = data;
    });
  }

  editar(Id: Number){
    this.router.navigate(['/cadastro-empresa/empresa-dados-gerais-edit/'+ Id]);
  }

}

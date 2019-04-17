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

  empresasAtivas: EmpresaListaViewModel[] = [];
  empresasInativas: EmpresaListaViewModel[] = [];
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
    this.empresa.obterEmpresas().subscribe(data => {
      data.map(f => { 
        if (f.Ativa) {
          return this.empresasAtivas.push(Object.assign(new EmpresaListaViewModel(), f));
        } else {
          return this.empresasInativas.push(Object.assign(new EmpresaListaViewModel(), f));
        }
      });
    })
  }

  editar(Id: Number){
        this.router.navigate(['configuracao/empresa/'+ Id +'/dados-gerais']);
      }

}

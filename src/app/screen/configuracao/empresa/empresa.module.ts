import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { EmpresaService, GridEmpresaResolver } from './empresa.service';

import { ListaEmpresaComponent } from './lista-empresa/lista-empresa.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { DadosGeraisEmpresaComponent } from './dados-gerais-empresa/dados-gerais-empresa.component';
import { EmpresaMoedasComponent } from './empresa-moedas/empresa-moedas.component';
import { EmpresaPreferenciaComponent } from './empresa-preferencia/empresa-preferencia.component';
import { EmpresaPolitaDespesaComponent } from './empresa-polita-despesa/empresa-polita-despesa.component';

const ROUTES: Routes = [
  { path: '', component: ListaEmpresaComponent },
  { path: 'listar-empresas', component: ListaEmpresaComponent,  resolve: {data: GridEmpresaResolver}  },
  {
    path: ':id', component: CadastroEmpresaComponent, children: [  
      { path: '',  component: DadosGeraisEmpresaComponent},   
      { path: 'dados-gerais', component: DadosGeraisEmpresaComponent },     
      { path: 'moeda', component: EmpresaMoedasComponent },   
      { path: 'preferencia', component: EmpresaPreferenciaComponent },      
      { path: 'polita-despesa', component: EmpresaPolitaDespesaComponent },
     
    ]
  }
]

@NgModule({
  declarations: [
    CadastroEmpresaComponent,
    DadosGeraisEmpresaComponent,
    EmpresaMoedasComponent,
    EmpresaPreferenciaComponent,
    EmpresaPolitaDespesaComponent,
    ListaEmpresaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),   
  ],
  exports: [
    RouterModule
  ],
  providers: [
    EmpresaService,
    GridEmpresaResolver
  ]
})
export class EmpresaModule { }

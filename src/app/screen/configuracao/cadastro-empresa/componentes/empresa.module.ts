import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { CadastroEmpresaComponent } from '../cadastro-empresa.component';

import { DadosGeraisEmpresaComponent } from './dados-gerais-empresa/dados-gerais-empresa.component';
import { EmpresaMoedasComponent } from './empresa-moedas/empresa-moedas.component';
import { EmpresaPreferenciaComponent } from './empresa-preferencia/empresa-preferencia.component';
import { EmpresaPolitaDespesaComponent } from './empresa-polita-despesa/empresa-polita-despesa.component';


const ROUTES: Routes = [
  {
    path: '', component: CadastroEmpresaComponent, children: [
      { path: '', component: DadosGeraisEmpresaComponent },
      { path: 'empresa-dados-gerais', component: DadosGeraisEmpresaComponent },
      { path: 'empresa-moeda', component: EmpresaMoedasComponent },
      { path: 'empresa-preferencia', component: EmpresaPreferenciaComponent },
      { path: 'empresa-polita-despesa', component: EmpresaPolitaDespesaComponent }
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class EmpresaModule { }

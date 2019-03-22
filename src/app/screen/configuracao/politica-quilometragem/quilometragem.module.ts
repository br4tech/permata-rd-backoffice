import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { CadastroPoliticaKilometragemComponent } from './cadastro-politica-kilometragem/cadastro-politica-kilometragem.component';
import { TrechoPreCadastradoComponent } from './trecho-pre-cadastrado/trecho-pre-cadastrado.component';
import { ValorPorQuilometragemComponent } from './valor-por-quilometragem/valor-por-quilometragem.component';

const ROUTES: Routes = [
  {
    path: '', component: CadastroPoliticaKilometragemComponent, children: [
      { path: '', redirectTo:'valores-quilometragem', component: ValorPorQuilometragemComponent },
      { path: 'valores-quilometragem', component: ValorPorQuilometragemComponent },
      { path: 'trechos-pre-cadastrados', component: TrechoPreCadastradoComponent }      
    ]    
  }
]

@NgModule({
  declarations: [
    CadastroPoliticaKilometragemComponent,
    ValorPorQuilometragemComponent,
    TrechoPreCadastradoComponent,
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

export class QuilometragemModule { }

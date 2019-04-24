import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ListaCentroDeCustoComponent } from './lista-centro-de-custo/lista-centro-de-custo.component';
import { CadastroCentroDeCustoComponent } from './cadastro-centro-de-custo/cadastro-centro-de-custo.component';
import { DadosCentroDeCustosComponent} from './dados-centro-de-custos/dados-centro-de-custos.component';
import { CentroDeCustosMembroComponent } from './centro-de-custos-membro/centro-de-custos-membro.component';
import { CentroDeCustoService } from './centrodecusto.service';

const ROUTES: Routes = [
  { path: '', component: ListaCentroDeCustoComponent },
  {
    path: ':id', component: CadastroCentroDeCustoComponent, children: [
      { path: '', redirectTo: 'dados-gerais', component: DadosCentroDeCustosComponent },
      { path: 'dados-gerais', component: DadosCentroDeCustosComponent },
      { path: 'membro', component: CentroDeCustosMembroComponent },     
    ]
  }
]

@NgModule({
  declarations: [
      ListaCentroDeCustoComponent,
      CadastroCentroDeCustoComponent,
      DadosCentroDeCustosComponent,
      CentroDeCustosMembroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CentroDeCustoService
  ]
})
export class CentroDeCustoModule { }

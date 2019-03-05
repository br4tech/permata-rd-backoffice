import { Routes } from '@angular/router';

import { SistemaComponent } from '../layout/sistema/sistema.component';

import { DespesasComponent } from './despesas/despesas.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { AprovacaoesComponent } from './aprovacaoes/aprovacaoes.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';

export const ROUTES: Routes = [
        {
                path: '', component: SistemaComponent, children: [
                        { path: '', redirectTo: 'despesas', pathMatch: 'full' },
                        { path: 'despesas', component: DespesasComponent },
                        { path: 'relatorios', component: RelatoriosComponent },
                        { path: 'aprovacoes', component: AprovacaoesComponent },
                        { path: 'admin', loadChildren: './gestao/gestao.module#GestaoModule' },
                        { path: 'configuracao', loadChildren: './configuracao/configuracao.module#ConfiguracaoModule' }
                ]
        }
 ]

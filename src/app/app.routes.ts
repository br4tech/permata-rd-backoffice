import { Routes } from '@angular/router'

import { SiteComponent } from './layout/site/site.component';
import { SistemaComponent} from './layout/sistema/sistema.component';

import { DespesasComponent } from './screen/despesas/despesas.component';
import { RelatoriosComponent } from './screen/relatorios/relatorios.component';
import { AprovacaoesComponent } from './screen/aprovacaoes/aprovacaoes.component';
import {  GestaoComponent } from './screen/gestao/gestao.component';
import { ConfiguracaoComponent } from './screen/configuracao/configuracao.component';

export const ROUTES: Routes = [
    { path: 'login', component: SiteComponent },
    { path: '', component: SistemaComponent,
     children: [
         { path: 'despesas', component: DespesasComponent },
         { path: 'relatorios', component: RelatoriosComponent },
         { path: 'aprovacoes', component: AprovacaoesComponent },
         { path: 'gestao', component: GestaoComponent },
         { path: 'configuracao', component: ConfiguracaoComponent }
     ]
    },
]
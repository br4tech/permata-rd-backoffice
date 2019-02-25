import { Routes } from '@angular/router'

import { SiteComponent } from './layout/site/site.component';
import { SistemaComponent} from './layout/sistema/sistema.component';

import { DespesasComponent } from './screen/despesas/despesas.component';
import { RelatoriosComponent } from './screen/relatorios/relatorios.component';
import { AprovacaoesComponent } from './screen/aprovacaoes/aprovacaoes.component';
import {  GestaoComponent } from './screen/gestao/gestao.component';
import { ConfiguracaoComponent } from './screen/configuracao/configuracao.component';

import { DashboardGraficosComponent } from './screen/dashboard-graficos/dashboard-graficos.component';
import { DashboardAlertasComponent } from './screen/dashboard-alertas/dashboard-alertas.component';
import { RelatorioUsuarioComponent} from './screen/relatorio-usuario/relatorio-usuario.component';
import { RelatorioProjetosComponent } from './screen/relatorio-projetos/relatorio-projetos.component';
import { RelatorioTiposComponent } from './screen/relatorio-tipos/relatorio-tipos.component';
import { RelatorioFormasDePagamentosComponent} from './screen/relatorio-formas-de-pagamentos/relatorio-formas-de-pagamentos.component';

export const ROUTES: Routes = [
    { path: 'login', component: SiteComponent },
    { path: '', component: SistemaComponent,
     children: [
         { path: '', redirectTo: 'despesas', pathMatch: 'full' },
         { path: 'despesas', component: DespesasComponent },
         { path: 'relatorios', component: RelatoriosComponent },
         { path: 'aprovacoes', component: AprovacaoesComponent },
         { path: 'gestao', component: GestaoComponent,
           children: [
            { path: 'dashboard-graficos', component: DashboardGraficosComponent },
            { path: 'dashboard-alertas', component: DashboardAlertasComponent }, 
            { path: 'relatorio-usuarios', component: RelatorioUsuarioComponent },
            { path: 'relatorio-projetos', component: RelatorioProjetosComponent },
            { path: 'relatorio-tipos', component: RelatorioTiposComponent },
            { path: 'relatorio-formas-pagamento', component: RelatorioFormasDePagamentosComponent },
           ]
         },
         { path: 'configuracao', component: ConfiguracaoComponent }
     ]
    },
]
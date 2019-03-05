import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

import { SidebarMenuComponent } from '../../shared/sidebar-menu/sidebar-menu.component';

import { GestaoComponent } from './gestao.component';
import { DashboardGraficosComponent } from './dashboard-graficos/dashboard-graficos.component';
import { DashboardAlertasComponent } from './dashboard-alertas/dashboard-alertas.component';

import { RelatorioUsuarioComponent } from './relatorio-usuario/relatorio-usuario.component';
import { RelatorioProjetosComponent } from './relatorio-projetos/relatorio-projetos.component';
import { RelatorioTiposComponent } from './relatorio-tipos/relatorio-tipos.component';
import { RelatorioCentroCustoComponent } from './relatorio-centro-custo/relatorio-centro-custo.component';
import { RelatorioFormasDePagamentosComponent } from './relatorio-formas-de-pagamentos/relatorio-formas-de-pagamentos.component';

import { ConfirmarPagamentoReembolsoComponent } from './confirmar-pagamento-reembolso/confirmar-pagamento-reembolso.component';
import { ExtratoPagamentoComponent } from './extrato-pagamento/extrato-pagamento.component';
import { ConciliarDespesasNaoReembolsaveisComponent } from './conciliar-despesas-nao-reembolsaveis/conciliar-despesas-nao-reembolsaveis.component';
import { ExtratoConciliacaoComponent } from './extrato-conciliacao/extrato-conciliacao.component';
import { ConversaoMoedaComponent } from './conversao-moeda/conversao-moeda.component';
import { ExtratoConversaoComponent } from './extrato-conversao/extrato-conversao.component';
import { AdiantamentoComponent } from './adiantamento/adiantamento.component';
import { ReprovarRelatorioComponent } from './reprovar-relatorio/reprovar-relatorio.component';

import { GraficoDeBarrasComponent } from './componentes/grafico-de-barras/grafico-de-barras.component';


const ROUTES: Routes = [
    {
        path: '', component: GestaoComponent, children: [
            { path: '', component: DashboardGraficosComponent },
            { path: 'dashboard-graficos', component: DashboardGraficosComponent },
            { path: 'dashboard-alertas', component: DashboardAlertasComponent },
            { path: 'relatorio-usuarios', component: RelatorioUsuarioComponent },
            { path: 'relatorio-projetos', component: RelatorioProjetosComponent },
            { path: 'relatorio-tipos', component: RelatorioTiposComponent },
            { path: 'relatorio-centro-custo', component: RelatorioTiposComponent },
            { path: 'relatorio-formas-pagamento', component: RelatorioFormasDePagamentosComponent },
            { path: 'confirmar-pagamento-reembolso', component: ConfirmarPagamentoReembolsoComponent },
            { path: 'extrato-pagamentos', component: ExtratoPagamentoComponent },
            { path: 'conciliar-depesas-nao-reembolsaveis', component: ConciliarDespesasNaoReembolsaveisComponent },
            { path: 'extrato-conciliacao', component: ExtratoConciliacaoComponent},
            { path: 'conversao-moeda', component: ConversaoMoedaComponent},
            { path: 'extrato-conversao', component: ExtratoConversaoComponent },
            { path: 'adiantamentos', component: AdiantamentoComponent },
            { path: 'reprovar-relatorios', component: ReprovarRelatorioComponent },
            
        ]
    }
]

@NgModule({
    declarations: [
        GestaoComponent,
        SidebarMenuComponent,
        DashboardGraficosComponent,
        DashboardAlertasComponent,
        RelatorioUsuarioComponent,
        RelatorioProjetosComponent,
        RelatorioTiposComponent,
        RelatorioCentroCustoComponent,
        RelatorioFormasDePagamentosComponent,
        GraficoDeBarrasComponent,
        ConfirmarPagamentoReembolsoComponent,
        ExtratoPagamentoComponent,
        ConciliarDespesasNaoReembolsaveisComponent,
        ExtratoConciliacaoComponent,
        ConversaoMoedaComponent,
        ExtratoConversaoComponent,
        AdiantamentoComponent,
        ReprovarRelatorioComponent,       
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ChartsModule
    ],
    exports: [
         RouterModule
    ],
    providers: [

    ]
})
export class GestaoModule { }
import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { SidebarMenuComponent } from '../../shared/sidebar-menu/sidebar-menu.component';

import { DashboardGraficosComponent } from './dashboard-graficos/dashboard-graficos.component';
import { DashboardAlertasComponent } from './dashboard-alertas/dashboard-alertas.component';

import { GestaoComponent } from './gestao.component';
import { RelatorioUsuarioComponent } from './relatorio-usuario/relatorio-usuario.component';
import { RelatorioProjetosComponent } from './relatorio-projetos/relatorio-projetos.component';
import { RelatorioTiposComponent } from './relatorio-tipos/relatorio-tipos.component';
import { RelatorioFormasDePagamentosComponent } from './relatorio-formas-de-pagamentos/relatorio-formas-de-pagamentos.component';

const ROUTES: Routes = [
    {
        path: '', component: GestaoComponent, children: [
            { path: '', component: DashboardGraficosComponent },
            { path: 'dashboard-graficos', component: DashboardGraficosComponent },
            { path: 'dashboard-alertas', component: DashboardAlertasComponent },
            { path: 'relatorio-usuarios', component: RelatorioUsuarioComponent },
            { path: 'relatorio-projetos', component: RelatorioProjetosComponent },
            { path: 'relatorio-tipos', component: RelatorioTiposComponent },
            { path: 'relatorio-formas-pagamento', component: RelatorioFormasDePagamentosComponent }
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
        RelatorioFormasDePagamentosComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [
         RouterModule
    ],
    providers: [

    ]
})
export class GestaoModule { }
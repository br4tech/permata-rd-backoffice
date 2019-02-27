import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import {ROUTES }  from './routes';

import { SidebarAcaoComponent } from '../shared/sidebar-acao/sidebar-acao.component';
import { SidebarFiltroComponent } from '../shared/sidebar-filtro/sidebar-filtro.component';
import { SidebarRelatoriosComponent } from '../shared/sidebar-relatorios/sidebar-relatorios.component';

import { DespesasComponent } from './despesas/despesas.component'
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { AprovacaoesComponent } from './aprovacaoes/aprovacaoes.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';

@NgModule({
    declarations: [ 
        DespesasComponent,
        SidebarAcaoComponent,
        RelatoriosComponent,
        SidebarFiltroComponent,
        AprovacaoesComponent,
        SidebarRelatoriosComponent,  
        ConfiguracaoComponent ,     
    ],
    imports: [         
        RouterModule.forRoot(ROUTES),     
     ],
     exports:[
         RouterModule
     ],
    providers: [

    ]  
})
export class RouteModule {}
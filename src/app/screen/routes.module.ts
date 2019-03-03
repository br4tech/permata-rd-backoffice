import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import {ROUTES }  from './routes';

import { SidebarAcaoComponent } from '../shared/sidebar-acao/sidebar-acao.component';
import { SidebarFiltroComponent } from '../shared/sidebar-filtro/sidebar-filtro.component';
import { SidebarRelatoriosComponent } from '../shared/sidebar-relatorios/sidebar-relatorios.component';

import { ModalDespesaComponent } from '../shared/modal-despesa/modal-despesa.component';
import { ModalPercursoComponent } from '../shared/modal-percurso/modal-percurso.component';
import { ModalPercursoMapaComponent } from '../shared/modal-percurso-mapa/modal-percurso-mapa.component';
import { ModalRelatorioComponent } from '../shared/modal-relatorio/modal-relatorio.component';

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
        ModalDespesaComponent,  
        ModalPercursoComponent,
        ModalPercursoMapaComponent,
        ModalRelatorioComponent
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
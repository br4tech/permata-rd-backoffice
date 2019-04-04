import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, AuthConfig } from 'angular-oauth2-oidc';

import {ROUTES }  from './routes';

import { AuthGuard } from '../core/auth/auth.guard';


import { LoginComponent } from './login/login.component';

import { LayoutComponent } from '../layout/layout.component';
import { HeaderComponent } from '../layout/header/header.component';
import { DropdownNotificacaoComponent} from '../layout/header/components/dropdown-notificacao/dropdown-notificacao.component';
import { DropdownPerfilComponent } from '../layout/header/components/dropdown-perfil/dropdown-perfil.component';
import { MenuComponent } from '../layout/header/components/menu/menu.component';
import { FooterComponent } from '../layout/footer/footer.component';

import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { LoginCallbackComponent } from './login/login-callback.component';

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

@NgModule({
    declarations: [ 
        LoginComponent,
        LayoutComponent,
        HeaderComponent,
        DropdownNotificacaoComponent,
        DropdownPerfilComponent,
        MenuComponent,
        FooterComponent,
        DespesasComponent,
        SidebarAcaoComponent,
        RelatoriosComponent,
        SidebarFiltroComponent,
        AprovacaoesComponent,
        SidebarRelatoriosComponent, 
        ModalDespesaComponent,  
        ModalPercursoComponent,
        ModalPercursoMapaComponent,
        ModalRelatorioComponent,  
        UnauthorizedComponent, 
        LoginCallbackComponent ,
    ],
    imports: [         
        RouterModule.forRoot(ROUTES),   
        HttpClientModule,
        OAuthModule.forRoot(),  
     ],
     exports:[
         RouterModule
     ],
     providers: [
         AuthGuard
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class RouteModule {}
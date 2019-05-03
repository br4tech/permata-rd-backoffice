import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';

import {ROUTES }  from './routes';

import { LoginService } from '../screen/login/login.service';
import { AuthInterceptor } from '../core/auth/auth.interceptor'

import { LayoutComponent } from '../layout/layout.component';
import { HeaderComponent } from '../layout/header/header.component';
import { DropdownNotificacaoComponent} from '../layout/header/components/dropdown-notificacao/dropdown-notificacao.component';
import { DropdownPerfilComponent } from '../layout/header/components/dropdown-perfil/dropdown-perfil.component';
import { MenuComponent } from '../layout/header/components/menu/menu.component';
import { FooterComponent } from '../layout/footer/footer.component';

import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

import { SidebarAcaoComponent } from '../shared/sidebar-acao/sidebar-acao.component';
import { SidebarFiltroComponent } from '../shared/sidebar-filtro/sidebar-filtro.component';
import { SidebarRelatoriosComponent } from '../shared/sidebar-relatorios/sidebar-relatorios.component';
import { SidebarMenuComponent } from '../shared/sidebar-menu/sidebar-menu.component';
import { SidebarConfiguracaoComponent } from '../shared/sidebar-configuracao/sidebar-configuracao.component';
import { DropdownBancoComponent } from '../shared/components/dropdown-banco/dropdown-banco.component';
import { DropdownOperadoraComponent } from '../shared/components/dropdown-operadora/dropdown-operadora.component';
import { DropdownCentroCustoComponent } from '../shared/components/dropdown-centro-custo/dropdown-centro-custo.component';
import { DropdownDepartamentoComponent } from '../shared/components/dropdown-departamento/dropdown-departamento.component';
import { DropdownTipoPessoaComponent } from '../shared/components/dropdown-tipo-pessoa/dropdown-tipo-pessoa.component';
import { DropdownMoedaComponent } from '../shared/components/dropdown-moeda/dropdown-moeda.component';
import { DropdownTipoPagamentoComponent } from '../shared/components/dropdown-tipo-pagamento/dropdown-tipo-pagamento.component';
import { DropdownPoliticaDespesaComponent } from '../shared/components/dropdown-politica-despesa/dropdown-politica-despesa.component';
import { DropdownPoliticaQuilometragemComponent } from '../shared/components/dropdown-politica-quilometragem/dropdown-politica-quilometragem.component';
import { DropdownTipoDespesaComponent } from '../shared/components/dropdown-tipo-despesa/dropdown-tipo-despesa.component';


import { ModalDespesaComponent } from '../shared/modal-despesa/modal-despesa.component';
import { ModalPercursoComponent } from '../shared/modal-percurso/modal-percurso.component';
import { ModalPercursoMapaComponent } from '../shared/modal-percurso-mapa/modal-percurso-mapa.component';
import { ModalRelatorioComponent } from '../shared/modal-relatorio/modal-relatorio.component';

import { DespesasComponent } from './despesas/despesas.component'
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { AprovacaoesComponent } from './aprovacaoes/aprovacaoes.component';
import { GestaoComponent } from '../screen/gestao/gestao.component';
import { ConfiguracaoComponent } from '../screen/configuracao/configuracao.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './login/signin/signin.component';
import { SignUpComponent } from './login/signup/signup.component';

@NgModule({
    declarations: [        
        LayoutComponent,
        LoginComponent,
        SignInComponent,
        SignUpComponent,
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
        GestaoComponent,
        SidebarMenuComponent,
        ConfiguracaoComponent,
        SidebarConfiguracaoComponent ,
        DropdownBancoComponent,
        DropdownOperadoraComponent,
        DropdownCentroCustoComponent,
        DropdownDepartamentoComponent,
        DropdownTipoPessoaComponent,
        DropdownMoedaComponent,
        DropdownTipoPagamentoComponent,
        DropdownPoliticaDespesaComponent,
        DropdownPoliticaQuilometragemComponent,
        DropdownTipoDespesaComponent,            
    ],
    imports: [     
        BrowserModule, 
        FormsModule,     
        RouterModule.forRoot(ROUTES),       
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,    
        ChartsModule,  
        ToastrModule.forRoot({
          progressBar: true
        })            
     ],
     exports:[
         RouterModule
     ],
     providers: [
        LoginService, {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class RouteModule {}
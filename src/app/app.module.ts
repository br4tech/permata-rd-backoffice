import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { ROUTES } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { SistemaComponent } from './layout/sistema/sistema.component';
import { SiteComponent } from './layout/site/site.component';
import { HeaderSistemaComponent } from './layout/sistema/header-sistema/header-sistema.component';
import { HeaderSiteComponent } from './layout/site/header-site/header-site.component';
import { MenuSiteComponent } from './layout/site/menu-site/menu-site.component';
import { MenuSistemaComponent } from './layout/sistema/menu-sistema/menu-sistema.component';
import { DropdownPerfilComponent } from './layout/sistema/componentes/dropdown-perfil/dropdown-perfil.component';
import { DropdownNotificacaoComponent } from './layout/sistema/componentes/dropdown-notificacao/dropdown-notificacao.component';
import { DespesasComponent } from './screen/despesas/despesas.component';
import { RelatoriosComponent } from './screen/relatorios/relatorios.component';
import { AprovacaoesComponent } from './screen/aprovacaoes/aprovacaoes.component';
import { GestaoComponent } from './screen/gestao/gestao.component';
import { ConfiguracaoComponent } from './screen/configuracao/configuracao.component';
import { SidebarAcaoComponent } from './shared/sidebar-acao/sidebar-acao.component';
import { SidebarMenuComponent } from './shared/sidebar-menu/sidebar-menu.component';
import { SidebarFiltroComponent } from './shared/sidebar-filtro/sidebar-filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LayoutComponent,
    SistemaComponent,
    SiteComponent,
    HeaderSistemaComponent,
    HeaderSiteComponent,
    MenuSiteComponent,
    MenuSistemaComponent,
    DropdownPerfilComponent,
    DropdownNotificacaoComponent,
    DespesasComponent,
    RelatoriosComponent,
    AprovacaoesComponent,
    GestaoComponent,
    ConfiguracaoComponent,
    SidebarAcaoComponent,
    SidebarMenuComponent,
    SidebarFiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderSiteComponent } from './header-site/header-site.component';
import { SiteComponent } from './site/site.component';

import { MenuSiteComponent } from './site/menu-site/menu-site.component';
import { MenuSistemaComponent } from './sistema/menu-sistema/menu-sistema.component';
import { DropdownPerfilComponent } from './componentes/dropdown-perfil/dropdown-perfil.component';
import { DropdownNotificacaoComponent } from './componentes/dropdown-notificacao/dropdown-notificacao.component';

import { HeaderSistemaComponent } from './header-sistema/header-sistema.component';
import { SistemaComponent } from './sistema/sistema.component';

import { FooterComponent } from './footer/footer.component'
  
 
@NgModule({
  declarations: [    
    HeaderSiteComponent,
    HeaderSistemaComponent,
    MenuSiteComponent,
    MenuSistemaComponent,
    DropdownPerfilComponent,
    DropdownNotificacaoComponent,
    SiteComponent ,
    SistemaComponent,
    FooterComponent   
  ],
  imports: [
    CommonModule,
    RouterModule,    
  ]
})
export class LayoutModule { }

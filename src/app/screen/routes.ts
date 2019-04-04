import { Routes } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from './login/login.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { LoginCallbackComponent } from './login/login-callback.component';

import { DespesasComponent } from './despesas/despesas.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { AprovacaoesComponent } from './aprovacaoes/aprovacaoes.component';

export const ROUTES: Routes = [  
        { path: 'login', redirectTo: 'login-callback', pathMatch: 'full'},
        { path: 'login-callback',  component: LoginCallbackComponent, data: { title: 'Login Page' }},  
        { path: 'unauthorized',  component: UnauthorizedComponent, data: { title: 'Unauthorized Page' }},   
        {                             
          path: '', 
          component: LayoutComponent, 
          canActivate: [AuthGuard],
          children: [
                        { path: '', redirectTo: 'despesas', pathMatch: 'full' },                       
                        { path: 'despesas', component: DespesasComponent },
                        { path: 'relatorios', component: RelatoriosComponent },
                        { path: 'aprovacoes', component: AprovacaoesComponent },
                        { path: 'admin', loadChildren: './gestao/gestao.module#GestaoModule' },
                        { path: 'configuracao', loadChildren: './configuracao/configuracao.module#ConfiguracaoModule' }
                ]
        }
 ]

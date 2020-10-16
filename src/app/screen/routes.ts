import { Routes } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from '../core/auth/auth.guard';

import { LoginComponent } from './login/login.component'
import { SignInComponent } from './login/signin/signin.component';
import { SignUpComponent } from './login/signup/signup.component';


import { DespesasComponent } from './despesas/despesas.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { AprovacaoesComponent } from './aprovacaoes/aprovacaoes.component';
import { GestaoComponent } from './gestao/gestao.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';


export const ROUTES: Routes = [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        {
                path: '', component: LoginComponent,
                children: [
                        { path: 'login', component: SignInComponent },
                        { path: 'registrar', component: SignUpComponent }
                ]
        },
        { path: 'unauthorized', component: UnauthorizedComponent, data: { title: 'Unauthorized Page' } },
        {
                path: '',
                component: LayoutComponent,
                // canActivate: [AuthGuard],
                children: [
                        { path: '', redirectTo: 'despesas', pathMatch: 'full' },
                        { path: 'despesas', component: DespesasComponent },
                        { path: 'relatorios', component: RelatoriosComponent },
                        { path: 'aprovacoes', component: AprovacaoesComponent },
                        {
                                path: 'admin', component: GestaoComponent, children: [
                                        { path: '', loadChildren: './gestao/gestao.module#GestaoModule' }
                                ]
                        },
                        {
                                path: 'configuracao', component: ConfiguracaoComponent, children: [
                                        { path: '', loadChildren: './configuracao/configuracao.module#ConfiguracaoModule' }
                                ]
                        }
                ]
        }
]

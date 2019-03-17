import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { SidebarConfiguracaoComponent } from '../../shared/sidebar-configuracao/sidebar-configuracao.component';

import { ConfiguracaoComponent } from './configuracao.component';
import { VisaoGeralConfiguracaoComponent } from './visao-geral-configuracao/visao-geral-configuracao.component';
import { CadastroPoliticaEmpresaComponent } from './cadastro-politica-empresa/cadastro-politica-empresa.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { MudarSenhaComponent } from './mudar-senha/mudar-senha.component';
import { CadastroFormaPagamentoComponent } from './cadastro-forma-pagamento/cadastro-forma-pagamento.component';
import { CadastroCentroDeCustoComponent } from './cadastro-centro-de-custo/cadastro-centro-de-custo.component';
import { CadastroMembrosEquipeComponent } from './cadastro-membros-equipe/cadastro-membros-equipe.component';
import { CadastroDepartamentoCargosComponent } from './cadastro-departamento-cargos/cadastro-departamento-cargos.component';
import { CadastroPoliticaDespesaComponent } from './cadastro-politica-despesa/cadastro-politica-despesa.component';
import { CadastroFluxoAprovacaoComponent } from './cadastro-fluxo-aprovacao/cadastro-fluxo-aprovacao.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';

const ROUTES: Routes = [
    {
        path: '', component: ConfiguracaoComponent, children: [
            { path: '', component: VisaoGeralConfiguracaoComponent },
            { path: 'visao-geral-configuracao', component: VisaoGeralConfiguracaoComponent },
            { path: 'cadastro-polita-empresa', component: CadastroPoliticaEmpresaComponent },
            { path: 'meus-dados', component: MeusDadosComponent },
            { path: 'mudar-senha', component: MudarSenhaComponent },
            { path: 'empresa', loadChildren: './empresa/empresa.module#EmpresaModule' },
            { path: 'cadastro-departamento-cargos', component: CadastroDepartamentoCargosComponent },
            { path: 'cadastro-membros', component: CadastroMembrosEquipeComponent },
            { path: 'cadastro-centro-custo', component: CadastroCentroDeCustoComponent },
            { path: 'projeto', loadChildren: './projeto/projeto.module#ProjetoModule'},
            { path: 'cadastro-politica-km', loadChildren: './cadastro-politica-kilometragem/kilometragem.module#KilometragemModule' },
            { path: 'tipo-despesa', loadChildren: './tipo-despesa/tipodespesa.module#TipoDespesaModule' },
            { path: 'cadastro-politica-despesa', component: CadastroPoliticaDespesaComponent },
            { path: 'cadastro-forma-pagamento', component: CadastroFormaPagamentoComponent },
            { path: 'cadastro-fluxo-aprovacao', component: CadastroFluxoAprovacaoComponent },
            { path: 'financeiro', component: FinanceiroComponent }
        ]
    }
]

@NgModule({
    declarations: [
        ConfiguracaoComponent,
        SidebarConfiguracaoComponent,
        VisaoGeralConfiguracaoComponent,
        CadastroPoliticaEmpresaComponent,
        MeusDadosComponent,
        MudarSenhaComponent,
        CadastroFormaPagamentoComponent,
        CadastroCentroDeCustoComponent,
        CadastroMembrosEquipeComponent,
        CadastroDepartamentoCargosComponent,  
        CadastroPoliticaDespesaComponent,
        CadastroFluxoAprovacaoComponent,
        FinanceiroComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]

})
export class ConfiguracaoModule { }
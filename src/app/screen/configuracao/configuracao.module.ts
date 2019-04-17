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
            { path: 'empresa', loadChildren:'./empresa/empresa.module#EmpresaModule' },
            { path: 'departamento-cargos', loadChildren: './departamento/departamento.module#DepartamentoModule' },
            { path: 'membros', loadChildren: './membro/membro.module#MembroModule' },
            { path: 'centro-custos', loadChildren: './centro-de-custo/centrodecusto.module#CentroDeCustoModule' },
            { path: 'projeto', loadChildren: './projeto/projeto.module#ProjetoModule'},
            { path: 'politica-quilometragem', loadChildren: './politica-quilometragem/quilometragem.module#QuilometragemModule' },
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
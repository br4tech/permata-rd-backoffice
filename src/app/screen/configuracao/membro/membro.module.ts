import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ListaMembroComponent } from './lista-membro/lista-membro.component';
import { CadastroMembrosEquipeComponent } from './cadastro-membros-equipe/cadastro-membros-equipe.component';
import { DadosMembroComponent } from './dados-membro/dados-membro.component';
import { BancoMembroComponent } from './banco-membro/banco-membro.component';
import { ConfiguracaoMembroComponent } from './configuracao-membro/configuracao-membro.component';
import { ListaProjetoMembroComponent} from './lista-projeto-membro/lista-projeto-membro.component';



const ROUTES: Routes = [
    {path: '', component: ListaMembroComponent },
    {path: 'listar-membro', component: ListaMembroComponent },
    {      
        path: ':id', component: CadastroMembrosEquipeComponent, children: [
            { path: '', redirectTo:'equipe', component: DadosMembroComponent},
            { path: 'equipe', component: DadosMembroComponent},
            { path: 'banco', component: BancoMembroComponent},
            { path: 'configuracao', component: ConfiguracaoMembroComponent },
            { path: 'projetos', component: ListaProjetoMembroComponent },
        ]
    }
]


@NgModule({
    declarations: [
        ListaMembroComponent,
        CadastroMembrosEquipeComponent,
        DadosMembroComponent,
        ConfiguracaoMembroComponent, 
        ListaProjetoMembroComponent,
        BancoMembroComponent
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
export class MembroModule { }
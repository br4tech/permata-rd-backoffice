import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ListaMembroComponent } from './lista-membro/lista-membro.component';
import { CadastroMembrosEquipeComponent } from './cadastro-membros-equipe/cadastro-membros-equipe.component';
import { DadosMembroComponent } from './dados-membro/dados-membro.component';
import { ConfiguracaoMembroComponent } from './configuracao-membro/configuracao-membro.component';
import { ListaProjetoMembroComponent} from './lista-projeto-membro/lista-projeto-membro.component';


const ROUTES: Routes = [
    {path: '', component: ListaMembroComponent },
    {path: 'listar-membro', component: ListaMembroComponent },
    {      
        path: 'cadastro-membro', component: CadastroMembrosEquipeComponent, children: [
            { path: '', redirectTo:'editar-membro-equipe', component: DadosMembroComponent},
            { path: 'editar-membro-equipe', component: DadosMembroComponent},
            { path: 'configuracao-membro', component: ConfiguracaoMembroComponent },
            { path: 'lista-membro-projetos', component: ListaProjetoMembroComponent },
        ]
    }
]


@NgModule({
    declarations: [
        ListaMembroComponent,
        CadastroMembrosEquipeComponent,
        DadosMembroComponent,
        ConfiguracaoMembroComponent, 
        ListaProjetoMembroComponent
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
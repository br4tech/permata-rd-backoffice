import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ListaDepartamentoComponent } from './lista-departamento/lista-departamento.component';
import { CadastroDepartamentoCargosComponent } from './cadastro-departamento-cargos/cadastro-departamento-cargos.component';
import { DadosDepartamentoComponent } from './dados-departamento/dados-departamento.component';
import { DepartamentoMembroComponent } from './departamento-membro/departamento-membro.component';

const ROUTES: Routes = [
    {path: '', component: ListaDepartamentoComponent },
    {path: 'listar-departamentos', component: ListaDepartamentoComponent },
    {      
        path: ':id', component: CadastroDepartamentoCargosComponent, children: [
            { path: '', redirectTo: 'editar', component: DadosDepartamentoComponent }, 
            { path: 'editar', component: DadosDepartamentoComponent }, 
            { path: 'membros', component: DepartamentoMembroComponent},
        ]
    }
]


@NgModule({
    declarations: [
        ListaDepartamentoComponent,
        CadastroDepartamentoCargosComponent,
        DadosDepartamentoComponent,
        DepartamentoMembroComponent
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
export class DepartamentoModule { }
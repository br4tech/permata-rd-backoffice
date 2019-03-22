import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ListaTipoDespesaComponent } from './lista-tipo-despesa/lista-tipo-despesa.component';
import { CadastroTipoDespesaComponent } from './cadastro-tipo-despesa/cadastro-tipo-despesa.component';
import { EditarTipoDespesaComponent } from './editar-tipo-despesa/editar-tipo-despesa.component';
import { LimiteDespesaComponent } from './limite-despesa/limite-despesa.component';



const ROUTES: Routes = [
    {path: '', component: ListaTipoDespesaComponent },
    {path: 'listar-tipo-despesa', component: ListaTipoDespesaComponent },
    {      
        path: 'cadastro-tipo-despesa', component: CadastroTipoDespesaComponent, children: [
            { path: '', redirectTo:'editar-tipo-despesa', component: EditarTipoDespesaComponent},
            { path: 'editar-tipo-despesa', component: EditarTipoDespesaComponent },
            { path: 'limites-despesas', component: LimiteDespesaComponent },
        ]
    }
]


@NgModule({
    declarations: [       
        ListaTipoDespesaComponent,
        CadastroTipoDespesaComponent,
        EditarTipoDespesaComponent,
        LimiteDespesaComponent
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
export class TipoDespesaModule { }
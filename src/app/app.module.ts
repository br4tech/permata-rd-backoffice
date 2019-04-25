import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouteModule } from './screen/routes.module';
import { DropdownBancoComponent } from './shared/components/dropdown-banco/dropdown-banco.component';
import { DropdownOperadoraComponent } from './shared/components/dropdown-operadora/dropdown-operadora.component';
import { DropdownCentroCustoComponent } from './shared/components/dropdown-centro-custo/dropdown-centro-custo.component';
import { DropdownDepartamentoComponent } from './shared/components/dropdown-departamento/dropdown-departamento.component';
import { DropdownTipoPessoaComponent } from './shared/components/dropdown-tipo-pessoa/dropdown-tipo-pessoa.component';
import { DropdownMoedaComponent } from './shared/components/dropdown-moeda/dropdown-moeda.component';
import { DropdownTipoPagamentoComponent } from './shared/components/dropdown-tipo-pagamento/dropdown-tipo-pagamento.component';
import { DropdownPoliticaDespesaComponent } from './shared/components/dropdown-politica-despesa/dropdown-politica-despesa.component';
import { DropdownPoliticaQuilometragemComponent } from './shared/components/dropdown-politica-quilometragem/dropdown-politica-quilometragem.component';
import { DropdownTipoDespesaComponent } from './shared/components/dropdown-tipo-despesa/dropdown-tipo-despesa.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownBancoComponent,
    DropdownOperadoraComponent,
    DropdownCentroCustoComponent,
    DropdownDepartamentoComponent,
    DropdownTipoPessoaComponent,
    DropdownMoedaComponent,
    DropdownTipoPagamentoComponent,
    DropdownPoliticaDespesaComponent,
    DropdownPoliticaQuilometragemComponent,
    DropdownTipoDespesaComponent,    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouteModule,
    ChartsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

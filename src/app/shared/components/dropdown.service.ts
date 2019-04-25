import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment'
import { DropDownViewModel } from './dropdown.viewmodel';

@Injectable()
export class CentroDeCustoService {

    constructor(private http: HttpClient) {
    }

    public obterBanco(): Observable<DropDownViewModel[]> {
        return this.http.get<DropDownViewModel[]>
                 (environment.base_url_util + "listarbanco");
    }

    public obterCentro(Tenant: string): Observable<DropDownViewModel[]> {
        return this.http.get<DropDownViewModel[]>
                 (environment.base_url_centrodecusto + "listarcentrodecusto?TenantId=" + Tenant);
    }

    public obterDepartamento(Tenant: string): Observable<DropDownViewModel[]> {
        return this.http.get<DropDownViewModel[]>
                 (environment.base_url_util + "listardepartamento?TenantId=" + Tenant);
    }

    public obterMoeda(Tenant: string): Observable<DropDownViewModel[]> {
        return this.http.get<DropDownViewModel[]>
                 (environment.base_url_util + "listarbanco?TenantId" + Tenant);
    }

    public obterOperadora(): Observable<DropDownViewModel[]> {
        return this.http.get<DropDownViewModel[]>
                 (environment.base_url_util + "listaroperadora");
    }

    public obterPoliticaDeDespesa(Tenant: string): Observable<DropDownViewModel[]> {
        return this.http.get<DropDownViewModel[]>
                 (environment.base_url_politicadedespesa + "listarpolitcadedespesa?TenantId" + Tenant);
    }

    public obterPoliticaDeQuilometragem(Tenant: string): Observable<DropDownViewModel[]> {
        return this.http.get<DropDownViewModel[]>
                 (environment.base_url_politicadequilometragem + "listarpolitcadequilometragem?TenantId" + Tenant);
    }

    public obterTipoPagamento(Tenant: string): Observable<DropDownViewModel[]> {
        return this.http.get<DropDownViewModel[]>
                 (environment.base_url_tipopagamento + "listartipopagamento?TenantId" + Tenant);
    }

    public obterTipoDespesa(Tenant: string): Observable<DropDownViewModel[]> {
        return this.http.get<DropDownViewModel[]>
                 (environment.base_url_tipodespesa + "listartipodespesa?TenantId" + Tenant);
    }

    public obterTipoPessoa(): Observable<DropDownViewModel[]> {
        return this.http.get<DropDownViewModel[]>
                 (environment.base_url_util + "listartipopessoa");
    }

    public obterProjeto(Tenant: string): Observable<DropDownViewModel[]> {
        return this.http.get<DropDownViewModel[]>
                 (environment.base_url_projeto + "listarprojeto?TenantId" + Tenant);
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
}
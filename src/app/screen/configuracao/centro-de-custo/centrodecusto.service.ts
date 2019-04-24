import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, Resolve } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { CentroDeCustoViewModel } from './centrodecusto.viewmodel';

@Injectable()
export class CentroDeCustoService {

    constructor(private http: HttpClient) {
    }

    public obter(): Observable<CentroDeCustoViewModel[]> {
        return this.http.get<CentroDeCustoViewModel[]>
            (environment.base_url_centrodecusto + 
                "listarcentrodecusto?TenantId="+ 
                "dc5804f3-87ef-4094-b5fa-735ed576ba61");
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
}
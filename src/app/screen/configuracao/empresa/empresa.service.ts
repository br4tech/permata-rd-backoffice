import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable()
export class EmpresaService {

     constructor(private http: HttpClient) {
     }

     obterEmpresas(): Observable<any> {
          return this.http.get(environment.base_url_empresa + "listarempresa").pipe(
            map(this.extractData));
     }

     private extractData(res: Response) {
          let body = res;
          return body || { };
        }

     private handleError(error: Response) {
          console.error(error);
          return Observable.throw(error.json() || 'Server error');
     }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable()
export class EmpresaService {

     constructor(private http: HttpClient) {
     }

     obterEmpresas(): Promise<any> {
          return this.http.get(environment.base_url_empresa + "listarempresa")
               .toPromise()
               .then((empresa: any) => empresa.json());
     }

     private handleError(error: Response) {
          console.error(error);
          return Observable.throw(error.json() || 'Server error');
     }
}


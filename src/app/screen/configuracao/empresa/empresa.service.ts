import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, Resolve } from '@angular/router'
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

     obterPrincipal(empresaId: number) : Observable<any>{
          return this.http.get(environment.base_url_empresa + "obterprincipal").pipe(
               map(this.extractData)
          );
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

@Injectable()
export class GridEmpresaResolver  implements Resolve<any>{
    constructor(
        private service: EmpresaService,
        private router: Router
    ) {  } 
    
    async resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<any> {
        await this.service.obterEmpresas()
        .toPromise()
        .then(data => {
            return data;
        }).catch(ex => {
            this.router.navigate(['account/accessdenied']);
        });
    }
}

@Injectable()
export class UpdateEmpresaResolver implements Resolve<any>{
 constructor(
   private service: EmpresaService,
   private route: Router
 ) { }

   resolve(
       route: ActivatedRouteSnapshot,
       state: RouterStateSnapshot
    ): Promise<any>{
        const empresaId = route.params['id'];
        return this.service.obterPrincipal(empresaId)
        .toPromise()
        .then(data => {
          if(data){            
              return data;
          }else{
             this.route.navigate(['parametrometa/listar'])
          }
        })
    }
}


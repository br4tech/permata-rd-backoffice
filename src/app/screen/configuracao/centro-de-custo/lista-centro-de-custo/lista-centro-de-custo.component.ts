import { Component, OnInit } from '@angular/core';
import { CentroDeCustoService } from '../centrodecusto.service';
import { CentroDeCustoViewModel } from '../centrodecusto.viewmodel';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-centro-de-custo',
  templateUrl: './lista-centro-de-custo.component.html',
  styleUrls: ['./lista-centro-de-custo.component.scss']
})

export class ListaCentroDeCustoComponent implements OnInit {

  items: CentroDeCustoViewModel[];
  private onDestroy: Subject<void> = new Subject<void>();

  constructor(private centroDeCustoService: CentroDeCustoService,
              private router: Router) { }

  ngOnInit() {
    this.centroDeCustoService.obter()
      .pipe(takeUntil(this.onDestroy))
      .subscribe((data: CentroDeCustoViewModel[])  => {
        this.items = data;
        console.log(this.items)
    })
  }

  public ngOnDestroy(): void {
    this.onDestroy.next();
    console.log("DESTROY");
  }

  editar(id: Number){
    this.router.navigate(['configuracao/centro-custos/'+ id]);
  }
}

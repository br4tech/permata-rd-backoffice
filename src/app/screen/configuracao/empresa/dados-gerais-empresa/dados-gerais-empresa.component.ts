import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-dados-gerais-empresa',
  templateUrl: './dados-gerais-empresa.component.html',
  styleUrls: ['./dados-gerais-empresa.component.scss']
})
export class DadosGeraisEmpresaComponent implements OnInit {

  constructor(
     private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.parent.snapshot.params['id'];
  }

}

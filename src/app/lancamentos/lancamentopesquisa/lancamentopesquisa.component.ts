import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/api';

import { LancamentoService, LancamentoFiltro } from '../lancamento.service';

@Component({
  selector: 'app-lancamentopesquisa',
  templateUrl: './lancamentopesquisa.component.html',
  styleUrls: ['./lancamentopesquisa.component.css']
})

export class LancamentopesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [ ];

  constructor(
    private lancamentoService: LancamentoService
  ) { }

  ngOnInit() {
   // this.listar();
  }

 listar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.listarLancamentos(this.filtro)
    .then(lancamento => this.lancamentos = lancamento)
     /* .then(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      })*/
      ;
  }

   aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.listar(pagina);
  }
}

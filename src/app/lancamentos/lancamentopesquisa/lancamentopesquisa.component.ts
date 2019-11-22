import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';

import { LancamentoService, LancamentoFiltro } from '../lancamento.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-lancamentopesquisa',
  templateUrl: './lancamentopesquisa.component.html',
  styleUrls: ['./lancamentopesquisa.component.css']
})

export class LancamentopesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [ ];

  // para exluisão
   @ViewChild('tabela') grid;
  // @ViewChild('tabela', {static: true}) grid: Table;

  constructor(
    private lancamentoService: LancamentoService,
    private toastyService: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
   // this.listar();
  }

 listar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.listarLancamentos(this.filtro)
   // .then(lancamento => this.lancamentos = lancamento)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

   aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.listar(pagina);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }
  excluir(lancamento: any) {
    this.lancamentoService.excluirLancamento(lancamento.codigo)
      .then(() => {
        this.grid.reset();
        this.toastyService.success(`Lancamento: ${lancamento.pessoa} excluido com sucesso`);
        //  this.toastyService.success(`Lancamento: ${this.filtro.descricao} excluido com sucesso`);
      })
      .catch(erro => this.errorHandler.handle(erro));
}
}

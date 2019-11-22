import { Component, OnInit, ViewChild } from '@angular/core';
import { PessoaService, PessoaFiltro } from '../pessoa.service';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-pessoapesquisa',
  templateUrl: './pessoapesquisa.component.html',
  styleUrls: ['./pessoapesquisa.component.css']
})
export class PessoapesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new PessoaFiltro();
   @ViewChild('tabela') grid;
  pessoas = [];

  constructor(
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private toastyService: ToastyService
  ) { }

  listar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pessoaService.listarPessoas(this.filtro)
       .then(resultado => {
        this.totalRegistros = resultado.total;
        this.pessoas = resultado.pessoas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

   aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.listar(pagina);
  }


  ngOnInit() {
  }

  confirmarExclusao(pessoa: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: any) {
    this.pessoaService.excluirPessoa(pessoa.codigo)
      .then(() => {
        this.grid.reset();
        this.toastyService.success(`${pessoa.nome} foi excluido com sucesso`);
        //  this.toastyService.success(`Lancamento: ${this.filtro.descricao} excluido com sucesso`);
      })
      .catch(erro => this.errorHandler.handle(erro));
}

 alternarStatus(pessoa: any): void {
    const novoStatus = !pessoa.ativo;

    this.pessoaService.mudarStatus(pessoa.codigo, novoStatus)
      .then(() => {
        const acao = novoStatus ? 'ativada' : 'desativada';

        pessoa.ativo = novoStatus;
        this.toastyService.success(`Pessoa ${acao} com sucesso!`);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}

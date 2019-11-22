import { Lancamento } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

import { CategoriaService } from 'src/app/categorias/categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { LancamentoService } from '../lancamento.service';
import { ToastyService } from 'ng2-toasty';

class Cliente {
  nome: string;
  email: string;
  profissao = '';
}


@Component({
  selector: 'app-lancamentocadastro',
  templateUrl: './lancamentocadastro.component.html',
  styleUrls: ['./lancamentocadastro.component.css']
})
export class LancamentocadastroComponent implements OnInit {

  cliente = new Cliente();
  profissoes = [
    { label: 'Programador', value: 1 },
    { label: 'Empresario', value: 2 },
    { label: 'Outro', value: 3 }
  ];

    tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

   categorias = [ ];

  pessoas = [ ];

  lancamento = new Lancamento();

   salvar2(form: NgForm) {
    console.log(form);

    // form.reset({ primeiroNome: 'Sebastião', profissao: '' });
  }
  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private lancamentoService: LancamentoService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  carregarCategorias() {
    return this.categoriaService.listarTodasCategorias()
      .then(categorias => {
        this.categorias = categorias.map(c => ({ label: c.nome, value: c.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPessoas() {
    return this.pessoaService.listarTodasPessoas()
      .then(pessoas => {
        this.pessoas = pessoas.content.map(c => ({ label: c.nome, value: c.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  // adicionar novo lancamento
  salvar(form: FormControl) {
    this.lancamentoService.adicionarLancamento(this.lancamento)
    .then(() => {
        this.toastyService.success(`Lançamento ${this.lancamento.descricao} adicionado com sucesso!`);

        form.reset();
        this.lancamento = new Lancamento();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}

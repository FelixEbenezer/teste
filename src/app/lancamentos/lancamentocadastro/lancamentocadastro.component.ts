import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

   categorias = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 },
  ];

  pessoas = [
    { label: 'João da Silva', value: 4 },
    { label: 'Sebastião Souza', value: 9 },
    { label: 'Maria Abadia', value: 3 },
  ];

  salvar(form: NgForm) {
    console.log(form);

    form.reset({ primeiroNome: 'Sebastião', profissao: '' });
  }

  salvar2(form: NgForm) {
    console.log(form);

    // form.reset({ primeiroNome: 'Sebastião', profissao: '' });
  }
  constructor() { }

  ngOnInit() {
  }

}

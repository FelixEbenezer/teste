import { Pessoa } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pessoacadastro',
  templateUrl: './pessoacadastro.component.html',
  styleUrls: ['./pessoacadastro.component.css']
})
export class PessoacadastroComponent implements OnInit {

  pessoa = new Pessoa();

  // cidades = ['Bie', 'Andulo'];

  cidades = [
    { label: 'Programador', value: 1 },
    { label: 'Empresario', value: 2 },
    { label: 'Outro', value: 3 }
  ];
  constructor() { }

  ngOnInit() {
  }

  salvarPessoa(form: FormControl) {

  }

  get editando() {
   return Boolean (this.pessoa.codigo);
  }

}

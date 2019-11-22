import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class PessoaFiltro {

  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}
@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/pessoas';
  constructor(
    private httpClient: HttpClient
  ) { }

  listarPessoas(filtro: PessoaFiltro): Promise<any> {
     const headers = new HttpHeaders().set('Authorization', 'Basic ZkBnLmNvbTphZG1pbg==');
     let params = new HttpParams();

     params = params.set('page', filtro.pagina.toString());
     params = params.set('size', filtro.itensPorPagina.toString());

     if (filtro.nome) {
        params = params.set('nome', filtro.nome);
    }

     return this.httpClient.get(`${this.pessoasUrl}`, {headers, params})
      .toPromise()
      .then((response) => {
        // tslint:disable-next-line: no-string-literal
        const pessoas = response['content'];
        const resultado = {
          pessoas,
          total: response['totalElements']
        };
        return resultado;
      });
  }

  listarTodasPessoas(): Promise<any> {
     const headers = new HttpHeaders().set('Authorization', 'Basic ZkBnLmNvbTphZG1pbg==');

     return this.httpClient.get(`${this.pessoasUrl}`, {headers})
      .toPromise()
      ;
  }

  excluirPessoa(codigo: number): Promise<void> {
       const headers = new HttpHeaders().set('Authorization', 'Basic ZkBnLmNvbTphZG1pbg==');
       return this.httpClient.delete(`${this.pessoasUrl}/${codigo}`, {headers})
      .toPromise()
      .then(() => null);
  }
  mudarStatus(codigo: number, ativo: boolean): Promise<void> {
    const headers = new HttpHeaders()
        .set('Authorization', 'Basic ZkBnLmNvbTphZG1pbg==')
        .set('Content-Type', 'application/json');

    return this.httpClient.put(`${this.pessoasUrl}/${codigo}/ativo`, ativo, { headers })
      .toPromise()
      .then(() => null);
  }
}

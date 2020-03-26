import { Lancamento } from './../core/model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as moment from 'moment';


export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFin: Date;
  pagina = 0;
  itensPorPagina = 4;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(
    private httpClient: HttpClient,
  ) { }

listarLancamentos(filtro: LancamentoFiltro): Promise<any> {
    const headers = new HttpHeaders().set('Authorization', 'Basic ZkBnLmNvbTphZG1pbg==');
    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());


    if (filtro.descricao) {
        params = params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
    params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
   }

    if (filtro.dataVencimentoFin) {
      params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoFin).format('YYYY-MM-DD'));
    }

    return this.httpClient.get(`${this.lancamentosUrl}?resumo`, {headers, params})
      .toPromise()
      .then((response) => {
        const lancamentos = response['content'];
        const resultado = {
          lancamentos,
          total: response['totalElements']
        };
        return resultado;
      });
  }

  excluirLancamento(codigo: number): Promise<void> {
       const headers = new HttpHeaders().set('Authorization', 'Basic ZkBnLmNvbTphZG1pbg==');
       return this.httpClient.delete(`${this.lancamentosUrl}/${codigo}`, {headers})
      .toPromise()
      .then(() => null);
  }

   adicionarLancamento(lancamento: Lancamento): Promise<Lancamento> {
  const headers = new HttpHeaders()
        .set('Authorization', 'Basic ZkBnLmNvbTphZG1pbg==')
        .set('Content-Type', 'application/json');

  return this.httpClient.post<Lancamento>(this.lancamentosUrl, lancamento, {headers})
    .toPromise();
  }

  // para atualizar, bucar por codigo e converter strings em datas

  private converterStringsParaDatas(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento,
        'YYYY-MM-DD').toDate();

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento,
          'YYYY-MM-DD').toDate();
      }
    }
  }

  atualizarLancamento(lancamento: Lancamento): Promise<Lancamento> {
    const headers = new HttpHeaders()
        .set('Authorization', 'Basic ZkBnLmNvbTphZG1pbg==')
        .set('Content-Type', 'application/json');

    return this.httpClient.put(`${this.lancamentosUrl}/${lancamento.codigo}`, lancamento, { headers })
      .toPromise()
      .then(response => {
        const lancamentoAlterado = response as Lancamento;

        this.converterStringsParaDatas([lancamentoAlterado]);

        return lancamentoAlterado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Lancamento> {
    const headers = new HttpHeaders().set('Authorization', 'Basic ZkBnLmNvbTphZG1pbg==');

    return this.httpClient.get(`${this.lancamentosUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const lancamento = response as Lancamento;

        this.converterStringsParaDatas([lancamento]);

        return lancamento;
      });
  }

}


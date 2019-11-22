import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriaService {

  categoriasUrl = 'http://localhost:8080/categorias';
  constructor(
    private httpClient: HttpClient
  ) { }

  listarTodasCategorias(): Promise<any> {
     const headers = new HttpHeaders().set('Authorization', 'Basic ZkBnLmNvbTphZG1pbg==');

     return this.httpClient.get(`${this.categoriasUrl}`, {headers})
      .toPromise()
      ;
  }

}

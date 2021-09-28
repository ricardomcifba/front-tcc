import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VazamentoService {

  vazamentoListagemUrl = 'https://backend-tcc-perdas.herokuapp.com/vazamento/listvaz';
//vazamentoListagemUrl = 'http://10.130.17.5:8080/vazamento/listvaz';
//vazamentoListagemUrl = 'http://localhost:8080/vazamento/listvaz';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Array<any>>(this.vazamentoListagemUrl);
  }

  
}

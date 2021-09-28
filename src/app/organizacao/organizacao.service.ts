import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizacaoService {

  organizacaoListagemUrl = 'https://backend-tcc-perdas.herokuapp.com/org/listorg';
  //organizacaoListagemUrl = 'http://10.131.17.5:8080/org/listorg';
  //organizacaoListagemUrl = 'http://localhost:8080/org/listorg';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Array<any>>(this.organizacaoListagemUrl);
  }

}

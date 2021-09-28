import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FatoService {
  static listTempo(): any {
    throw new Error("Method not implemented.");
  }

  BairroUrl = 'https://backend-tcc-perdas.herokuapp.com/consulta/bairro';
  //BairroUrl = 'http://10.130.17.5:8080/consulta/bairro';
  //BairroUrl = 'http://localhost:8080/consulta/bairro';

  constructor(private http: HttpClient) { }

  listarFato() {
    return this.http.get(this.BairroUrl).map(res => res);
  }

}




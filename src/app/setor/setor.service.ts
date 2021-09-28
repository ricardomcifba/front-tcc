import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SetorService {
  static listTempo(): any {
    throw new Error("Method not implemented.");
  }


OrgUrl = 'https://backend-tcc-perdas.herokuapp.com/consulta/setor';
//OrgUrl = 'http://10.130.17.5:8080/consulta/setor';
//OrgUrl = 'http://localhost:8080/consulta/setor';

  constructor(private http: HttpClient) { }

  listarFato() {
    return this.http.get(this.OrgUrl).map(res => res);
  }

}




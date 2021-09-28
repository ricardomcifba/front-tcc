import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MapaService {
 FatoUrl = 'https://backend-tcc-perdas.herokuapp.com/consulta/fatoMapa';
 mapaUrl = 'https://backend-tcc-perdas.herokuapp.com/vazamento/listmap';
 //FatoUrl = 'http://10.130.17.5:8080/consulta/fatoMapa';
 // mapaUrl = 'http://10.130.17.5:8080/vazamento/listmap';
  //FatoUrl = 'http://localhost:8080/consulta/fatoMapa';
  //mapaUrl = 'http://localhost:8080/vazamento/listmap';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(this.mapaUrl).map(resp => resp);
  }

  listarFato() {
    return this.http.get(this.FatoUrl).map(resp => resp);
  };
}

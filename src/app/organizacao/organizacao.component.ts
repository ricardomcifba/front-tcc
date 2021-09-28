import { Component, OnInit } from '@angular/core';
import { OrganizacaoService } from './organizacao.service';
import { PagerService } from '../../service';

@Component({
  selector: 'app-analise',
  templateUrl: './organizacao.component.html',
  styleUrls: ['./organizacao.component.css']
})
export class OrganizacaoComponent implements OnInit {

  listaOrganizacao: Array<any>;

  constructor(private service: OrganizacaoService, private pagerService: PagerService) { }

  pager: any = {};
  pagedItems: any[];

  ngOnInit() {
    this.service.listar().subscribe(resposta => {
      this.listaOrganizacao = resposta
      this.setPage(1)
    });

  }

  setPage(page: number) {
    // objetos da pagina corrente
    this.pager = this.pagerService.getPager(this.listaOrganizacao.length, page);
    // pegar página atual
    this.pagedItems = this.listaOrganizacao.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}

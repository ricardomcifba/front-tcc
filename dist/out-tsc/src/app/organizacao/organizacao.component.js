import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OrganizacaoService } from './organizacao.service';
import { PagerService } from '../../service';
var OrganizacaoComponent = /** @class */ (function () {
    function OrganizacaoComponent(service, pagerService) {
        this.service = service;
        this.pagerService = pagerService;
        this.pager = {};
    }
    OrganizacaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.listar().subscribe(function (resposta) {
            _this.listaOrganizacao = resposta;
            _this.setPage(1);
        });
    };
    OrganizacaoComponent.prototype.setPage = function (page) {
        // objetos da pagina corrente
        this.pager = this.pagerService.getPager(this.listaOrganizacao.length, page);
        // pegar página atual
        this.pagedItems = this.listaOrganizacao.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    OrganizacaoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-analise',
            templateUrl: './organizacao.component.html',
            styleUrls: ['./organizacao.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [OrganizacaoService, PagerService])
    ], OrganizacaoComponent);
    return OrganizacaoComponent;
}());
export { OrganizacaoComponent };
//# sourceMappingURL=organizacao.component.js.map
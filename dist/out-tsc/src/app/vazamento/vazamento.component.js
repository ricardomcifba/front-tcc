import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { VazamentoService } from './vazamento.service';
import { PagerService } from '../../service';
var VazamentoComponent = /** @class */ (function () {
    function VazamentoComponent(service, pagerService) {
        this.service = service;
        this.pagerService = pagerService;
        this.pager = {};
    }
    VazamentoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.listar().subscribe(function (resposta) {
            _this.listaVazamento = resposta;
            _this.setPage(1);
        });
    };
    VazamentoComponent.prototype.setPage = function (page) {
        // objetos da pagina corrente
        this.pager = this.pagerService.getPager(this.listaVazamento.length, page);
        // pegar página atual
        this.pagedItems = this.listaVazamento.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    VazamentoComponent.prototype.download = function () {
        var csvData = this.ConvertToCSV(this.listaVazamento);
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/txt' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'nome_do_arquivo.txt'; /* your file name*/
        a.click();
        return 'success';
    };
    VazamentoComponent.prototype.ConvertToCSV = function (objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";
        for (var index in objArray[0]) {
            //Now convert each value to string and comma-separated
            row += index + ';';
        }
        row = row.slice(0, -1);
        //append Label row with line break
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ';';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    VazamentoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-vazamento',
            templateUrl: './vazamento.component.html',
            styleUrls: ['./vazamento.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [VazamentoService, PagerService])
    ], VazamentoComponent);
    return VazamentoComponent;
}());
export { VazamentoComponent };
//# sourceMappingURL=vazamento.component.js.map
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var VazamentoService = /** @class */ (function () {
    //vazamentoListagemUrl = 'http://10.130.17.5:8080/vazamento/listvaz';
    //vazamentoListagemUrl = 'http://localhost:8080/vazamento/listvaz';
    function VazamentoService(http) {
        this.http = http;
        this.vazamentoListagemUrl = 'http://EMB641C6765D718:8080/vazamento/listvaz';
    }
    VazamentoService.prototype.listar = function () {
        return this.http.get(this.vazamentoListagemUrl);
    };
    VazamentoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], VazamentoService);
    return VazamentoService;
}());
export { VazamentoService };
//# sourceMappingURL=vazamento.service.js.map
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AnaliseService = /** @class */ (function () {
    function AnaliseService(http) {
        this.http = http;
        this.analiseUrl = 'http://localhost:8080/analise';
        this.analiseListagemUrl = 'http://localhost:8080/analise/listagem';
    }
    AnaliseService.prototype.listar = function () {
        return this.http.get(this.analiseListagemUrl);
    };
    AnaliseService.prototype.criar = function (analise) {
        return this.http.post(this.analiseUrl, analise);
    };
    AnaliseService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AnaliseService);
    return AnaliseService;
}());
export { AnaliseService };
//# sourceMappingURL=analise.service.js.map
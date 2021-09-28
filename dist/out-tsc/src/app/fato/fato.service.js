import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var FatoService = /** @class */ (function () {
    //analiseListagemUrl = 'http://10.130.17.5:8080/consulta/fatodim';
    //analiseListagemUrl = 'http://localhost:8080/consulta/fatodim';
    function FatoService(http) {
        this.http = http;
        this.analiseListagemUrl = 'http://EMB641C6765D718:8080/consulta/fatodim';
    }
    FatoService.prototype.listar = function () {
        return this.http.get(this.analiseListagemUrl);
    };
    ;
    FatoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], FatoService);
    return FatoService;
}());
export { FatoService };
//# sourceMappingURL=fato.service.js.map
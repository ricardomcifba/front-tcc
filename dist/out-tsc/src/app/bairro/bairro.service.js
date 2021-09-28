import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
var FatoService = /** @class */ (function () {
    //BairroUrl = 'http://10.130.17.5:8080/consulta/bairro';
    //BairroUrl = 'http://localhost:8080/consulta/bairro';
    function FatoService(http) {
        this.http = http;
        this.BairroUrl = 'http://EMB641C6765D718:8080/consulta/bairro';
    }
    FatoService.listTempo = function () {
        throw new Error("Method not implemented.");
    };
    FatoService.prototype.listarFato = function () {
        return this.http.get(this.BairroUrl).map(function (res) { return res; });
    };
    FatoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], FatoService);
    return FatoService;
}());
export { FatoService };
//# sourceMappingURL=bairro.service.js.map
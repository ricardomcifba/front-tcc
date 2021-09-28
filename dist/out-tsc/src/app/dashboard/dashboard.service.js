import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
var FatoService = /** @class */ (function () {
    function FatoService(http) {
        this.http = http;
        this.FatoUrl = 'http://localhost:8080/consulta/fatodim';
        this.TempoUrl = 'http://localhost:8080/consulta/tempo';
    }
    FatoService.listTempo = function () {
        throw new Error("Method not implemented.");
    };
    FatoService.prototype.listarFato = function () {
        return this.http.get(this.FatoUrl);
    };
    FatoService.prototype.listarTempo = function () {
        return this.http.get(this.TempoUrl).map(function (res) { return res; });
    };
    FatoService.prototype.listTempo = function () {
        //this.listarTempo().subscribe(resposta => {
        //this.meses = resposta['meses'].map(resposta => resposta.nomeMes);
        //this.perdas = resposta['meses'].map(resposta => resposta.perdaA);
        //console.log(this.meses)
        //return this.meses;
        //})
        return this.http.get(this.TempoUrl);
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
//# sourceMappingURL=dashboard.service.js.map
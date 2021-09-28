import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
var PerdasService = /** @class */ (function () {
    //FatoUrl = 'http://10.130.17.5:8080/consulta/fatodim';
    //TempoUrl = 'http://10.130.17.5:8080/consulta/tempo';
    //FatoUrl = 'http://localhost:8080/consulta/fatodim';
    //TempoUrl = 'http://localhost:8080/consulta/tempo';
    function PerdasService(http) {
        this.http = http;
        this.FatoUrl = 'http://EMB641C6765D718:8080/consulta/fatodim';
        this.TempoUrl = 'http://EMB641C6765D718:8080/consulta/tempo';
    }
    PerdasService.listTempo = function () {
        throw new Error("Method not implemented.");
    };
    PerdasService.prototype.listarFato = function () {
        return this.http.get(this.FatoUrl);
    };
    PerdasService.prototype.listarTempo = function () {
        return this.http.get(this.TempoUrl).map(function (res) { return res; });
    };
    PerdasService.prototype.listTempo = function () {
        //this.listarTempo().subscribe(resposta => {
        //this.meses = resposta['meses'].map(resposta => resposta.nomeMes);
        //this.perdas = resposta['meses'].map(resposta => resposta.perdaA);
        //console.log(this.meses)
        //return this.meses;
        //})
        return this.http.get(this.TempoUrl);
    };
    PerdasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PerdasService);
    return PerdasService;
}());
export { PerdasService };
//# sourceMappingURL=perdas.service.js.map
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
var SetorService = /** @class */ (function () {
    //OrgUrl = 'http://10.130.17.5:8080/consulta/setor';
    //OrgUrl = 'http://localhost:8080/consulta/setor';
    function SetorService(http) {
        this.http = http;
        this.OrgUrl = 'http://EMB641C6765D718:8080/consulta/setor';
    }
    SetorService.listTempo = function () {
        throw new Error("Method not implemented.");
    };
    SetorService.prototype.listarFato = function () {
        return this.http.get(this.OrgUrl).map(function (res) { return res; });
    };
    SetorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SetorService);
    return SetorService;
}());
export { SetorService };
//# sourceMappingURL=setor.service.js.map
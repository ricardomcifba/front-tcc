import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var OrganizacaoService = /** @class */ (function () {
    //organizacaoListagemUrl = 'http://10.131.17.5:8080/org/listorg';
    //organizacaoListagemUrl = 'http://localhost:8080/org/listorg';
    function OrganizacaoService(http) {
        this.http = http;
        this.organizacaoListagemUrl = 'http://EMB641C6765D718:8080/org/listorg';
    }
    OrganizacaoService.prototype.listar = function () {
        return this.http.get(this.organizacaoListagemUrl);
    };
    OrganizacaoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], OrganizacaoService);
    return OrganizacaoService;
}());
export { OrganizacaoService };
//# sourceMappingURL=organizacao.service.js.map
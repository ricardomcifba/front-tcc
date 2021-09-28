import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AnaliseService } from './analise.service';
var AnaliseComponent = /** @class */ (function () {
    function AnaliseComponent(service) {
        this.service = service;
    }
    AnaliseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.analise = {};
        this.service.listar().subscribe(function (resposta) { return _this.listaAnalises = resposta; });
    };
    AnaliseComponent = tslib_1.__decorate([
        Component({
            selector: 'app-analise',
            templateUrl: './analise.component.html',
            styleUrls: ['./analise.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AnaliseService])
    ], AnaliseComponent);
    return AnaliseComponent;
}());
export { AnaliseComponent };
//# sourceMappingURL=analise.component.js.map
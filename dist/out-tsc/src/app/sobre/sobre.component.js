import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var SobreComponent = /** @class */ (function () {
    function SobreComponent() {
    }
    SobreComponent.prototype.ngOnInit = function () {
    };
    SobreComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "pe-7s-gift",
            message: "Seja bem vindo ao projeto de análise de perdas."
        }, {
            type: type[color],
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    SobreComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sobre',
            templateUrl: './sobre.component.html',
            styleUrls: ['./sobre.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SobreComponent);
    return SobreComponent;
}());
export { SobreComponent };
//# sourceMappingURL=sobre.component.js.map
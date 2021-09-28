import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
export var ROUTES = [
    { path: '/fato', title: 'Tabela Fato x Dimensões', icon: 'business_briefcase-24', class: '' },
    { path: '/vazamento', title: 'Registros de Vazamento', icon: 'files_paper', class: '' },
    { path: '/organizacao', title: 'Dimensão Organização', icon: 'files_paper', class: '' },
    { path: '/perdas', title: 'Gráfico de Perdas', icon: 'media-2_sound-wave', class: '' },
    { path: '/setor', title: 'Perdas por Setor', icon: 'business_chart-pie-36', class: '' },
    { path: '/bairro', title: 'Perdas por Bairro', icon: 'business_chart-bar-32', class: '' },
    { path: '/mapa', title: 'Mapa de Ocorrências', icon: 'location_compass-05', class: '' },
    { path: '/sobre', title: 'Sobre a Aplicação', icon: 'travel_info', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { PerdasComponent } from '../../perdas/perdas.component';
import { MapaComponent } from '../../mapa/mapa.component';
import { OrganizacaoComponent } from '../../organizacao/organizacao.component';
import { VazamentoComponent } from '../../vazamento/vazamento.component';
import { BairroComponent } from '../../bairro/bairro.component';
import { SetorComponent } from '../../setor/setor.component';
import { FatoComponent } from '../../fato/fato.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { SobreComponent } from '../../sobre/sobre.component';
var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(AdminLayoutRoutes),
                FormsModule,
                ChartsModule,
                NgbModule,
                ToastrModule.forRoot()
            ],
            declarations: [
                PerdasComponent,
                OrganizacaoComponent,
                MapaComponent,
                VazamentoComponent,
                BairroComponent,
                SetorComponent,
                FatoComponent,
                SobreComponent
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());
export { AdminLayoutModule };
//# sourceMappingURL=admin-layout.module.js.map
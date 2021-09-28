import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { PerdasComponent } from '../../perdas/perdas.component';
import { MapaComponent } from '../../mapa/mapa.component';
import { OSMComponent } from '../../osm/osm.component';
import { OrganizacaoComponent } from '../../organizacao/organizacao.component';
import { VazamentoComponent } from '../../vazamento/vazamento.component';
import { BairroComponent } from '../../bairro/bairro.component';
import { SetorComponent } from '../../setor/setor.component';
import { FatoComponent } from '../../fato/fato.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { SobreComponent } from '../../sobre/sobre.component';


@NgModule({
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
    OSMComponent,
    VazamentoComponent,
    BairroComponent,
    SetorComponent,
    FatoComponent,
    SobreComponent
  ]
})

export class AdminLayoutModule {}

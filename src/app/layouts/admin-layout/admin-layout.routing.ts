import { Routes } from '@angular/router';

import { PerdasComponent } from '../../perdas/perdas.component';
import { MapaComponent } from '../../mapa/mapa.component';
import { OSMComponent } from '../../osm/osm.component';
import { OrganizacaoComponent } from '../../organizacao/organizacao.component';
import { VazamentoComponent } from '../../vazamento/vazamento.component';
import { BairroComponent } from '../../bairro/bairro.component';
import { SetorComponent } from '../../setor/setor.component';
import { FatoComponent } from '../../fato/fato.component';
import { SobreComponent } from '../../sobre/sobre.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'perdas',      component: PerdasComponent },
    { path: 'mapa',        component: MapaComponent },
    { path: 'osm',        component: OSMComponent },
    { path: 'organizacao',        component: OrganizacaoComponent },
    { path: 'vazamento',        component: VazamentoComponent },
    { path: 'bairro',        component: BairroComponent },
    { path: 'setor',        component: SetorComponent },
    { path: 'fato',        component: FatoComponent },
    { path: 'sobre',        component: SobreComponent }

];

import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/fato', title: 'Tabela Fato x Dimensões',  icon:'business_briefcase-24', class: '' },
    { path: '/vazamento', title: 'Registros de Vazamento',  icon:'files_paper', class: '' },
    { path: '/organizacao', title: 'Dimensão Organização',  icon:'files_paper', class: '' },
    { path: '/perdas', title: 'Gráfico de Perdas',  icon: 'media-2_sound-wave', class: '' },
    { path: '/setor', title: 'Perdas por Setor',  icon:'business_chart-pie-36', class: '' },
    { path: '/bairro', title: 'Perdas por Bairro',  icon:'business_chart-bar-32', class: '' },
    { path: '/mapa', title: 'Mapa de Ocorrências',  icon:'location_compass-05', class: '' },
    //{ path: '/osm', title: 'Mapa OSM',  icon:'location_compass-05', class: '' },
    { path: '/sobre', title: 'Sobre a Aplicação',  icon:'travel_info', class: '' }


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}

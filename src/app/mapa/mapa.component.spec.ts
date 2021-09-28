import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {NgZone} from '@angular/core';
import { inject} from '@angular/core/testing';

import {AgmMarker} from '@agm/core';
import {GoogleMapsAPIWrapper} from '@agm/core';
import {Marker} from '@google/markerclusterer';
import {ClusterManager} from '@google/markerclusterer';
import * as MarkerClusterer from '@google/markerclusterer';

import { MapaComponent } from './mapa.component';

describe('MapsComponent', () => {
  let component: MapaComponent;
  let fixture: ComponentFixture<MapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



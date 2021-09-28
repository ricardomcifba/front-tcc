import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { TestBed } from '@angular/core/testing';

import { OrganizacaoComponent } from './organizacao.component';
import { OrganizacaoService } from './organizacao.service';

describe('AnaliseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizacaoService = TestBed.get(OrganizacaoService);
    expect(service).toBeTruthy();
  });
});

describe('AnaliseComponent', () => {
  let component: OrganizacaoComponent;
  let fixture: ComponentFixture<OrganizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

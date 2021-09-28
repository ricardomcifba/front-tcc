import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { TestBed } from '@angular/core/testing';

import { VazamentoComponent } from './vazamento.component';
import { VazamentoService } from './vazamento.service';

describe('AnaliseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VazamentoService = TestBed.get(VazamentoService);
    expect(service).toBeTruthy();
  });
});

describe('VazamentoComponent', () => {
  let component: VazamentoComponent;
  let fixture: ComponentFixture<VazamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VazamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VazamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

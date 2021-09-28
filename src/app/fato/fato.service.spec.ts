import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { TestBed } from '@angular/core/testing';

import { FatoComponent } from './fato.component';
import { FatoService } from './Fato.service';

describe('FatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FatoService = TestBed.get(FatoService);
    expect(service).toBeTruthy();
  });
});

describe('AnaliseComponent', () => {
  let component: FatoComponent;
  let fixture: ComponentFixture<FatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

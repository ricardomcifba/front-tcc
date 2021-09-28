import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VazamentoComponent } from './vazamento.component';

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

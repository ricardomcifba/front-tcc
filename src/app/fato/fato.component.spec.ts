import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatoComponent } from './fato.component';

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

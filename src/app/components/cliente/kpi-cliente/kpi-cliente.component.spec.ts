import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiClienteComponent } from './kpi-cliente.component';

describe('KpiClienteComponent', () => {
  let component: KpiClienteComponent;
  let fixture: ComponentFixture<KpiClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

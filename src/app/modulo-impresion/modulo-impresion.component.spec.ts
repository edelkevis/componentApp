import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloImpresionComponent } from './modulo-impresion.component';

describe('ModuloImpresionComponent', () => {
  let component: ModuloImpresionComponent;
  let fixture: ComponentFixture<ModuloImpresionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloImpresionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloImpresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

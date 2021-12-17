import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDonacionesComponent } from './listar-donaciones.component';

describe('ListarDonacionesComponent', () => {
  let component: ListarDonacionesComponent;
  let fixture: ComponentFixture<ListarDonacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDonacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

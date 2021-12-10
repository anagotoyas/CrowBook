import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarComentarioComponent } from './modificar-comentario.component';

describe('ModificarComentarioComponent', () => {
  let component: ModificarComentarioComponent;
  let fixture: ComponentFixture<ModificarComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarResenasComponent } from './modificar-resenas.component';

describe('ModificarResenasComponent', () => {
  let component: ModificarResenasComponent;
  let fixture: ComponentFixture<ModificarResenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarResenasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

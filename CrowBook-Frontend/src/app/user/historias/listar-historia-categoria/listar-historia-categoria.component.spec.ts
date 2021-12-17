import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHistoriaCategoriaComponent } from './listar-historia-categoria.component';

describe('ListarHistoriaCategoriaComponent', () => {
  let component: ListarHistoriaCategoriaComponent;
  let fixture: ComponentFixture<ListarHistoriaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHistoriaCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHistoriaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

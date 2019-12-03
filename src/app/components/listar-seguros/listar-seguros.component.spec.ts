import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSegurosComponent } from './listar-seguros.component';

describe('ListarSegurosComponent', () => {
  let component: ListarSegurosComponent;
  let fixture: ComponentFixture<ListarSegurosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSegurosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

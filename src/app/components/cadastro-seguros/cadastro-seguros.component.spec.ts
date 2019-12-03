import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSegurosComponent } from './cadastro-seguros.component';

describe('CadastroSegurosComponent', () => {
  let component: CadastroSegurosComponent;
  let fixture: ComponentFixture<CadastroSegurosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSegurosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

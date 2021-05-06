import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTechshotsComponent } from './cadastrar-techshots.component';

describe('CadastrarTechshotsComponent', () => {
  let component: CadastrarTechshotsComponent;
  let fixture: ComponentFixture<CadastrarTechshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarTechshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarTechshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTechshotsComponent } from './listar-techshots.component';

describe('ListarTechshotsComponent', () => {
  let component: ListarTechshotsComponent;
  let fixture: ComponentFixture<ListarTechshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTechshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTechshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

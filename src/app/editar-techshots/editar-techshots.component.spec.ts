import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTechshotsComponent } from './editar-techshots.component';

describe('EditarTechshotsComponent', () => {
  let component: EditarTechshotsComponent;
  let fixture: ComponentFixture<EditarTechshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTechshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTechshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

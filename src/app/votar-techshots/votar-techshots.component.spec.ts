import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotarTechshotsComponent } from './votar-techshots.component';

describe('VotarTechshotsComponent', () => {
  let component: VotarTechshotsComponent;
  let fixture: ComponentFixture<VotarTechshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotarTechshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotarTechshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

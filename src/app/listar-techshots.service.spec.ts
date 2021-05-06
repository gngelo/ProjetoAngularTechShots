import { TestBed } from '@angular/core/testing';

import { ListarTechshotsService } from './listar-techshots.service';

describe('ListarTechshotsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarTechshotsService = TestBed.get(ListarTechshotsService);
    expect(service).toBeTruthy();
  });
});

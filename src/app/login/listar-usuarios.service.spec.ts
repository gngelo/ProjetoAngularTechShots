import { TestBed } from '@angular/core/testing';

import { ListarUsuariosService } from './listar-usuarios.service';

describe('ListarUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarUsuariosService = TestBed.get(ListarUsuariosService);
    expect(service).toBeTruthy();
  });
});

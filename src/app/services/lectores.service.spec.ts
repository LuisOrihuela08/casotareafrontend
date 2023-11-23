import { TestBed } from '@angular/core/testing';

import { LectoresService } from './lectores.service';

describe('LectoresService', () => {
  let service: LectoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LectoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

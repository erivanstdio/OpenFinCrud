import { TestBed } from '@angular/core/testing';

import { ExternalCompaniesService } from './external-companies.service';

describe('ExternalCompaniesService', () => {
  let service: ExternalCompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalCompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

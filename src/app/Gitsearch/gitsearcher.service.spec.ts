import { TestBed, inject } from '@angular/core/testing';

import { GitsearcherService } from './gitsearcher.service';

describe('GitsearcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitsearcherService]
    });
  });

  it('should be created', inject([GitsearcherService], (service: GitsearcherService) => {
    expect(service).toBeTruthy();
  }));
});

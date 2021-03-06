import { TestBed } from '@angular/core/testing';

import { GitapiService } from './gitapi.service';

describe('GitapiService', () => {
  let service: GitapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

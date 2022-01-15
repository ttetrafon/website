import { TestBed } from '@angular/core/testing';

import { YadtsRuleLibraryService } from './yadts-rule-library.service';

describe('YadtsRuleLibraryService', () => {
  let service: YadtsRuleLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YadtsRuleLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllVerseService } from './all-verse.service';

describe('AllVerseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllVerseService]
    });
  });

  it('should ...', inject([AllVerseService], (service: AllVerseService) => {
    expect(service).toBeTruthy();
  }));
});

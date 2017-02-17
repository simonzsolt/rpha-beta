/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerseService } from './verse.service';

describe('VerseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerseService]
    });
  });

  it('should ...', inject([VerseService], (service: VerseService) => {
    expect(service).toBeTruthy();
  }));
});

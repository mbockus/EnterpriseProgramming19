import { TestBed, async, inject } from '@angular/core/testing';

import { IsSavedGuard } from './is-saved.guard';

describe('IsSavedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsSavedGuard]
    });
  });

  it('should ...', inject([IsSavedGuard], (guard: IsSavedGuard) => {
    expect(guard).toBeTruthy();
  }));
});

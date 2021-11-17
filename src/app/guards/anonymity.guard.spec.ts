import { TestBed } from '@angular/core/testing';

import { AnonymityGuard } from './anonymity.guard';

describe('AnonymityGuard', () => {
  let guard: AnonymityGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnonymityGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

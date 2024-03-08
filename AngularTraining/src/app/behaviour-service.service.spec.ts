import { TestBed } from '@angular/core/testing';

import { BehaviourServiceService } from './behaviour-service.service';

describe('BehaviourServiceService', () => {
  let service: BehaviourServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviourServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OnlineOfflineService } from './online-offline.service';

describe('OnlineOfflineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlineOfflineService = TestBed.get(OnlineOfflineService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RenderIndexService } from './render-index.service';

describe('RenderIndexService', () => {
  let service: RenderIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

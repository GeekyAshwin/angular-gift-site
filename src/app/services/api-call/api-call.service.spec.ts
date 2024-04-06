import { TestBed } from '@angular/core/testing';

import { ApiCallService } from './api-call.service';

describe('ApiCallService', () => {
  let service: ApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the base url of the API', () => {
    expect(service.baseUrl()).toBe('http://localhost:3000');
  });

  it('should return the version of the API', () => {
    expect(service.apiVersion()).toBe('v1');
  });

  it('should return the full URL of an endpoint', () => {
    expect(service.apiUrl('hello')).toBe('http://localhost:3000/v1/hello');
  });
});

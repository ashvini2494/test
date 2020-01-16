import { TestBed } from '@angular/core/testing';

import { PizzaserviceService } from './pizzaservice.service';

describe('PizzaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaserviceService = TestBed.get(PizzaserviceService);
    expect(service).toBeTruthy();
  });
});

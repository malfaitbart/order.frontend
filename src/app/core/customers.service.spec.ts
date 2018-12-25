import { TestBed } from '@angular/core/testing';

import { CustomersService } from './customers.service';
import { HttpClient } from '@angular/common/http';
import { Email } from './customer';


fdescribe('CustomersService', () => {
	let httpClient: HttpClient;
	let service: CustomersService;

	beforeEach(() => {
		httpClient = jasmine.createSpyObj('httpClient', ['get']);
		service = new CustomersService(httpClient);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
  });

  it('should convert a mailaddress to an EmailObject', () => {
    const testAddress = 'malfaitbart@gmail.com';
    const expectedMailObject: Email = {
      domain: 'gmail.com',
      localPart: 'malfaitbart',
      complete: 'malfaitbart@gmail.com'
    }
    expect(service.toMailObject(testAddress)).toEqual(expectedMailObject);
  });
});

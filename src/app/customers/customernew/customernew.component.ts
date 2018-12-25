import { Component, OnInit } from '@angular/core';
import { } from '../../shared/shared.module';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomersService } from 'src/app/core/customers.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/core/customer';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-customernew',
  templateUrl: './customernew.component.html',
  styleUrls: ['./customernew.component.scss']
})
export class CustomernewComponent implements OnInit {
  newCustomer = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),

    // "email":
    email: new FormGroup({
      localPart: new FormControl(''),
      domain: new FormControl(''),
      complete: new FormControl('')
    }),

    // "address"
    address: new FormGroup({
      streetName: new FormControl(''),
      houseNumber: new FormControl(''),
      postalCode: new FormControl(''),
      country: new FormControl(''),
    }),

    // "phoneNumber"
    phoneNumber: new FormGroup({
      number: new FormControl(''),
      countryCallingCode: new FormControl(''),
    })
  })

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit(customer: Customer) {
    const editedCustomer: Customer = {
      ...customer,
      email: this.customersService.toMailObject(customer.email.complete),
    }
    console.log(this.newCustomer.value);
    console.warn(this.newCustomer.value);
    this.customersService.add(editedCustomer)
      .subscribe(() => this.router.navigate(['/customers']));
  }

}

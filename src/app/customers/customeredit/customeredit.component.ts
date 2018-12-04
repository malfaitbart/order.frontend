import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

import { Customer } from '../../core/customer';
import { CustomersService } from '../../core/customers.service';

@Component({
  selector: 'app-customeredit',
  templateUrl: './customeredit.component.html',
  styleUrls: ['./customeredit.component.scss']
})
export class CustomereditComponent implements OnInit {
  @Input() customer$: Observable<Customer>;
  updateCustomer = new FormGroup({
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
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.customer$ = this.customersService.getById(id);
  }

  update(customer: Customer): void {
    this.customersService.update(customer)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

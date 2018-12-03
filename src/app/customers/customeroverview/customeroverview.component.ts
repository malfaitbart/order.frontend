import { Component, OnInit } from '@angular/core';

import { Customer } from '../../core/customer';
import { CustomersService } from '../../core/customers.service';

@Component({
  selector: 'app-customeroverview',
  templateUrl: './customeroverview.component.html',
  styleUrls: ['./customeroverview.component.scss']
})
export class CustomeroverviewComponent implements OnInit {
  customers: Customer[];
  constructor(
    private customersService: CustomersService
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void{
    this.customersService.getCustomers()
      .subscribe(customers=>this.customers = customers);
  }

}

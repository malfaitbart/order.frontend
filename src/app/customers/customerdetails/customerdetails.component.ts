import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { Customer } from '../../core/customer';
import { CustomersService } from '../../core/customers.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.scss']
})
export class CustomerdetailsComponent implements OnInit {
  customer$: Observable<Customer>;

  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute,
    private location: Location

  ) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.customer$ = this.customersService.getById(id);
  }

  goBack(): void {
    this.location.back();
  }

}

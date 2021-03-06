import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CommonModule } from '@angular/common';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomernewComponent } from './customernew/customernew.component';
import { CustomeroverviewComponent } from './customeroverview/customeroverview.component';
import { CustomereditComponent } from './customeredit/customeredit.component';

import { SearchfilterPipe } from '../shared/searchfilter';

@NgModule({
  declarations: [
    CustomerdetailsComponent,
    CustomernewComponent,
    CustomeroverviewComponent,
    CustomereditComponent,
    SearchfilterPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CustomersModule { }

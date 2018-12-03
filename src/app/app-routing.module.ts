import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home/home.component';

import { NewItemComponent } from './items/new-item/new-item.component';
import { DetailsComponent } from './items/details/details.component';
import { OverviewComponent } from './items/overview/overview.component';
import { EditComponent } from './items/edit/edit.component';

import { CustomernewComponent } from './customers/customernew/customernew.component';
import { CustomeroverviewComponent } from './customers/customeroverview/customeroverview.component';
import { CustomerdetailsComponent } from './customers/customerdetails/customerdetails.component';
import { CustomereditComponent } from './customers/customeredit/customeredit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'items', component: OverviewComponent },
  { path: 'items/new', component: NewItemComponent },
  { path: 'items/edit/:id', component: EditComponent }, 
  { path: 'items/:id', component: DetailsComponent },
  { path: 'customers', component: CustomeroverviewComponent },
  { path: 'customers/new', component: CustomernewComponent },
  { path: 'customers/edit/:id', component: CustomereditComponent },
  { path: 'customers/:id', component: CustomerdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

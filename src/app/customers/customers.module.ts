import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [OverviewComponent, DetailsComponent, EditComponent, NewComponent],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }

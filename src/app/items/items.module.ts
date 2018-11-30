import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NewItemComponent } from './new-item/new-item.component';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    NewItemComponent, 
    DetailsComponent, 
    OverviewComponent
  ],
  imports: [
    SharedModule
  ],
})
export class ItemsModule { }

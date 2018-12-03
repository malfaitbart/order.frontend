import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { NewItemComponent } from './new-item/new-item.component';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    NewItemComponent, 
    DetailsComponent, 
    OverviewComponent, 
    EditComponent
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
})
export class ItemsModule { }

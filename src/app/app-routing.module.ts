import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { NewItemComponent } from './items/new-item/new-item.component';
import { DetailsComponent } from './items/details/details.component';
import { OverviewComponent } from './items/overview/overview.component';
import { EditComponent } from './items/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'items', component: OverviewComponent },
  { path: 'items/new', component: NewItemComponent },
  { path: 'items/edit/:id', component: EditComponent }, 
  { path: 'items/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

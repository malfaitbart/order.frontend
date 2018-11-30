import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, RightSidebarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    HeaderComponent,
    RightSidebarComponent,
    FlexLayoutModule,
    AppRoutingModule
  ]
})
export class SharedModule { }

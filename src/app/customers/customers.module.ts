import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [CustomersComponent]
})
export class CustomersModule { }

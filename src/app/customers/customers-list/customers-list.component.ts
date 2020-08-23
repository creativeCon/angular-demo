import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  private _customers: any[] = [];
  @Input() set customers(customers) {
    if(customers && customers.length){
      this.filteredCustomers = this._customers = customers;
      this.calculateOrders();
    }
  } 

  filteredCustomers: any[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'USD';

  constructor() { }

  ngOnInit() {
  
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: any) => {
        this.customersOrderTotal += cust.orderTotal;
    });
  }

  filterList(data) {
    const regex = new RegExp(data, 'i');
    if (data) {
      this.filteredCustomers = this._customers.filter((cust: any) => {
          return cust.name.match(regex)
      });
      this.calculateOrders();
    } 
    else {
      this.filteredCustomers = this._customers;
      this.calculateOrders();
    }
  }

}

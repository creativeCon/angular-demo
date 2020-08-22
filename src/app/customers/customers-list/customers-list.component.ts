import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  @Input() customers: any[]; 

  filteredCustomers: any[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'USD';

  constructor() { }

  ngOnInit() {
    console.log(this.customers);
    this.filteredCustomers = this.customers;
    this.calculateOrders();
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
      this.filteredCustomers = this.customers.filter((cust: any) => {
          return cust.name.match(regex)
      });
      this.calculateOrders();
    } 
    else {
      this.filteredCustomers = this.customers;
    }
  }

}

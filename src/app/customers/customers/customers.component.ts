import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { DataService } from '../../service/data.service'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  people: any[] = [];

  constructor(private dataService: DataService, private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.getCustomersList();
    // this.people = [
    //         { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
    //         { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
    //         { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
    //         { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
    //     ];
   
  }

  getCustomersList(){
    this.dataService.getCustomers().subscribe((res: any) => {
      this.people = res.data;
      console.log(this.people);
      this._cd.detectChanges();
    });
  }

}

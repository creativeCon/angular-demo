import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  template: `
  Filter: <input type="text" placeholder="Search Customer" [(ngModel)]="_searchText" #search="ngModel" (input)="filter()"/>
  `,
  styleUrls: ['./filter-textbox.component.scss']
})
export class FilterTextboxComponent implements OnInit {
  private _searchText: string = '';
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  filter() {
    this.searchTextChange.emit(this._searchText.trim());
  }

}

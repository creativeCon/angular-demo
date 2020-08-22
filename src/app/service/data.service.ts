import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_ENDPOINT = environment.apiEndPoint;

  constructor(private http: HttpClient) { }

  getCustomers(searchText = '') {
    const constructedUrl = this.formUrlParam('customers', { searchText });
    
    return this.http.get(`${this.API_ENDPOINT}/${constructedUrl}`).pipe(
      catchError(this.handleError('getCustomers', []))
    );
  }

  formUrlParam(url, data) {
    if (!data) {
      return url;
    }
    let queryString = '';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (!queryString) {
          queryString = `?${key}=${data[key]}`;
        } else {
          queryString += `&${key}=${data[key]}`;
        }
      }
    }
    return url + queryString;
  }

  handleError(operation = 'operation', result = []) {
    return (error: any) => {
      console.log(`${operation} failed: ${error.message}`); // log to console
      return of(result);
    }
  }

}

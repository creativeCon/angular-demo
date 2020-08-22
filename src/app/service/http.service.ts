import { HttpClient, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  API_ENDPOINT = environment.apiEndPoint;

  constructor(private http: HttpClient) { }

  get({ url, params = {}, API_ENDPOINT = this.API_ENDPOINT }) {
    const constructedUrl = this.formUrlParam(url, params);
    // start loader
    return this.http.get(`${API_ENDPOINT}/${constructedUrl}`).pipe(map((res) => {
      return this.handleResponse(res);
    }));
  }

  post({ url, payload, options = {}, API_ENDPOINT = this.API_ENDPOINT }) {
    // start loader
    return this.http.post(`${API_ENDPOINT}/${url}`, payload, options).pipe(map((res) => {
      return this.handleResponse(res);
    }));
  }

  delete({ url, payload, API_ENDPOINT = this.API_ENDPOINT }) {
    // start loader
    return this.http.delete(`${API_ENDPOINT}/${url}`, payload).pipe(map((res) => {
      return this.handleResponse(res);
    }));
  }

  put({ url, payload, API_ENDPOINT = this.API_ENDPOINT }) {
    // start loader
    return this.http.put(`${API_ENDPOINT}/${url}`, payload).pipe(map((res) => {
      return this.handleResponse(res);
    }));
  }

  upload(url: string, file: File) {
    const formData: FormData = new FormData();
    if (file) {
      formData.append('files', file, file.name);
    }
    return this.post({ url, payload: formData });
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

  handleResponse(res) {
    const data = res;
    if (res.error) {
      // handle error
    } else {
      return res;
    }
  }

}

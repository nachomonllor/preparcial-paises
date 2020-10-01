import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // tslint:disable-next-line: variable-name
  constructor(protected http: HttpClient) { }
  get<T>(url): Observable<any> {
    return this.http.get(url);
  }
  getSingle<T>(url, id: any) {
    return this.http.get<T>(
      `${url}/${id}`
    );
  }
  post<T>(url, payload: T): Observable<T> {
    return this.http.post<T>(url, payload);
  }
  put<T>(url, payload: T): Observable<T> {
    return this.http.put<T>(url, payload);
  }
  delete<T>(url): Observable<T> {
    return this.http.delete<T>(url);
  }
}

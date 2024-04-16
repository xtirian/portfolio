import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public post(url: string, data: any, type: any) {
    return this.http.post<typeof type>(url, data);
  }

}

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getHeaders } from 'src/app/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class RequestService implements OnInit{
  constructor(private http: HttpClient) { }

  userInfo: any = {};

  ngOnInit(): void {
  }

  get<T>(url: string, data: any = null) {
    let suffix = '';
    if (data) {
      suffix = `?${Object.keys(data)
        .map(key => [key, data[key]].map(encodeURIComponent).join('='))
        .join('&')}`;
    }
    const apiUrl = `${environment.API_ENOW}${url}${suffix}`;
    const headers = getHeaders(url,'', this.userInfo.Id);
    return this.http.get<T>(apiUrl, { headers }).pipe(
      //retry(3), // retry a failed request up to 3 times
      //catchError(this.handleError) // then handle the error
    );
  }

  post<T>(url: string, body : any) {
    const apiUrl = `${environment.API_ENOW}${url}`;
    const headers = getHeaders(url,'', this.userInfo.Id);
    return this.http.post<T>(apiUrl, body, { headers });
  }
}

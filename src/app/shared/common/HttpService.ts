import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { IHttpService } from "./IHttpService";
import { environment } from "src/environments/environment";
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { retry } from 'rxjs/operators';

@Injectable()
export class HttpService implements IHttpService {

  constructor(private _http: HttpClient) {
  }

  post<T>(url: string, data: any): Observable<T> {
    if (!url) {
      throw "url is empty";
    }

    url = environment.apiBaseUrl.concat(url);
    return this._http.post<T>(url, data, { withCredentials: true }).pipe(retry(2));
  }

  get1<T>(url: string, params?: HttpParams,headers?: HttpHeaders): Observable<T> {
    if (!url) {
      throw "url is empty";
    }
    return this._http.get<T>(url, { params: params,headers:headers, withCredentials: true }).pipe(retry(2));
  }

  get<T>(url: string, params?: HttpParams,headers?: HttpHeaders): Observable<T> {
    if (!url) {
      throw "url is empty";
    }
    url = environment.apiBaseUrl.concat(url);
    return this._http.get<T>(url, { params: params,headers:headers, withCredentials: true }).pipe(retry(2));
  }

  delete<T>(url: string, params?: HttpParams): Observable<T> {
    if (!url) {
      throw "url is empty";
    }

    url = environment.apiBaseUrl.concat(url);
    return this._http.delete<T>(url, { params: params, withCredentials: true });
  }

  put<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'json'; // Make responseType optional or accept multiple types
    withCredentials?: boolean;
}): Observable<T> {
    if (!url) {
        throw "url is empty";
    }

    url = environment.apiBaseUrl.concat(url);
    return this._http.put<T>(url, body);
}

}

import { Observable } from "rxjs";
import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { InjectionToken } from "@angular/core";

export const HTTP_SERVICE = new InjectionToken("http service");

export interface IHttpService {

  get1<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T>;


  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T>;

  /**
   * Send http post request
   * @param url
   * @param data
   */
  post<T>(url: string, data: any, headers?: HttpHeaders): Observable<T>;

    /**
   * Send http post request
   * @param url
   * @param data
   */
    delete<T>(url: string, params?: HttpParams): Observable<T>;

    put<T>(url: string, body: any | null, options?: {
      headers?: HttpHeaders | { [header: string]: string | string[]; };
      context?: HttpContext;
      observe?: 'body';
      params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; };
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'json'; // Allow other response types
      withCredentials?: boolean;
  }): Observable<T>;}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://18.228.206.21:8080/api'; // Altere para a URL do seu backend

  constructor(private http: HttpClient) { }

  getDadosPaginados(page: number, pageSize: number): Observable<any> {
    const url = `${this.baseUrl}/datalogs?page=${page}&size=${pageSize}`;
    return this.http.get(url);
  }

  // getStatusCount(): Observable<any>{
  //   const url = `${this.baseUrl}/datalogs/status/count`;
  //   return this.http.get(url);
  // }

  getStatusCountByBarName(barName: string): Observable<{ status: string, count: number }[]>{
    const url = `${this.baseUrl}/datalogs/status/count?barName=${barName}`;
    return this.http.get<{ status: string, count: number }[]>(url);
  }

  // getStatusCountByBarNameAndData(barName: string, startDate:string, endDate:string): Observable<any>{
  //   const url = `${this.baseUrl}/datalogs/status/count?barName=${barName}&startDate=${startDate}&endDate=${endDate}`;
  //   return this.http.get(url);
  // }
}

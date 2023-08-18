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
}

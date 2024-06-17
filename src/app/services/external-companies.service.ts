import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalCompaniesService {
  private apiUrl = 'https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {

    return this.http.get(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  create(company: any): Observable<any> {
    return this.http.post(this.apiUrl, company);
  }

  update(id: number, company: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, company);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
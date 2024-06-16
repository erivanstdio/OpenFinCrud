import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  private apiUrl = 'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {

    return this.http.get(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  create(partner: any): Observable<any> {
    return this.http.post(this.apiUrl, partner);
  }

  update(id: number, partner: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, partner);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
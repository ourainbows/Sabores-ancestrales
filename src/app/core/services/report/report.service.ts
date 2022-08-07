import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private apiUrl = 'http://localhost:3000/report';
  constructor(private http: HttpClient) {}

  // getReports(id: string | null, type: string | null): Observable<any> {
  //   return this.http.get(`${this.apiUrl}?id=${id}&type=${type}`);
  // }

  // provisional endpoint for testing
  getReports(id: string | null, type: string | null): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  deleteReport(id : number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

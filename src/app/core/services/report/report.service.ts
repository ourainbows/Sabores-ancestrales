import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private apiUrl = `${environment.api}/report`;
  constructor(private http: HttpClient) {}

  userId = localStorage.getItem('userId');

  getReportsUser(id: string | null): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  deleteReports(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  createReport(report: any, type: string, id: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${type}/${id}`, {
      report,
      userId: this.userId,
    });
  }
}

import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Feedback } from './../../../shared/models/feedback.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl = `${environment.api}/feedback`;

  getFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiUrl);
  }
  createFeedback(feedback: any) {
    return this.http.post<Feedback>(this.apiUrl, feedback);
  }

  constructor(private http: HttpClient) {}
}

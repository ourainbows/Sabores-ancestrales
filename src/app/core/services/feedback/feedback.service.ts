import { HttpClient } from '@angular/common/http';
import { Feedback } from './../../../shared/models/feedback.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private apiUrl = 'http://localhost:3000/feedback';
  getFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiUrl);
  }

  constructor(private http: HttpClient) { }
}

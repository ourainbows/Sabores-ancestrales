import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Feedback } from './../../../shared/models/feedback.model';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl = `${environment.api}/feedback`;

  getFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiUrl);
  }
  getFeedbackStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}-data`).pipe(
      map((score: any) => {
        let requiredScore = {
          qualification: score.qualification[0],
          quantity: score.quantity[0],
          oneStar: score.stars.find((star: any) => star.stars === 1)?.quantity || 0,
          twoStar: score.stars.find((star: any) => star.stars === 2)?.quantity || 0,
          threeStar: score.stars.find((star: any) => star.stars === 3)?.quantity || 0,
          fourStar: score.stars.find((star: any) => star.stars === 4)?.quantity || 0,
          fiveStar: parseInt(score.stars.find((star: any) => star.stars === 5)?.quantity) || 0,
        }
        return requiredScore;
      })
    );
  }

  createFeedback(feedback: any) {
    return this.http.post<Feedback>(this.apiUrl, feedback);
  }

  constructor(private http: HttpClient) {}
}

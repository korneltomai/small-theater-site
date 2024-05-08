import { Injectable } from '@angular/core';
import { Observable, share} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Screening } from './screening';

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {

  private screeningsUrl = 'api/screenings';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getScreenings(movieId: number): Observable<Screening[]> {
    return this.http.get<Screening[]>(`${this.screeningsUrl}?movieId=${movieId}`).pipe(share());
  }

}
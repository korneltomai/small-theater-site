import { Injectable } from '@angular/core';
import { Observable, catchError, of, share, map} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'api/movies';
  private movies: Observable<Movie[]> | undefined;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    
  }

  getMovies(): Observable<Movie[]> {
    if (this.movies)
      return this.movies;
    else {
      this.movies = this.http.get<Movie[]>(this.moviesUrl).pipe(share());
      return this.movies;
    }
  }

  getMovie(id: number): Observable<Movie | undefined> {
    return this.getMovies().pipe(
      map((movies) => movies.find((m) => m.id === id))
    );
  };

}

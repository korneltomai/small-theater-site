import { Injectable } from '@angular/core';
import { Observable, share, map, catchError, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Movie } from './movie';
import { Screening } from './screening';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'api/movies';
  private genresUrl = 'api/genres';
  private movies: Observable<Movie[]> | undefined;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    if (this.movies)
      return this.movies;
    else {
      this.movies = this.http.get<Movie[]>(this.moviesUrl).pipe(share());
      return this.movies;
    }
  }

  getMovie(movieId: number): Observable<Movie | undefined> {
    return this.getMovies().pipe(
      map((movies) => movies.find((m) => m.id === movieId))
    );
  };

  getScreening(movieId: number, screeningId: number): Observable<Screening | undefined> {
    return this.getMovie(movieId).pipe(
      map((movie) => movie?.screenings.find((s) => s.id === screeningId))
    );
  }

  getGenres(): Observable<string[]> {
    return this.http.get<string[]>(this.genresUrl).pipe(share());
  }
}

import { Component } from '@angular/core';
import { NgFor, NgIf, DatePipe} from '@angular/common'
import { RouterModule } from '@angular/router';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, RouterModule],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss'
})
export class MoviesPageComponent {
  movies : Movie[] | undefined;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }

}

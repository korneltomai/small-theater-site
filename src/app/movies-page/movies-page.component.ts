import { Component } from '@angular/core';
import { NgFor, NgIf, DatePipe, NgClass} from '@angular/common'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ScreeningPipe } from '../screenings.pipe';
import { ScreeningHelperService } from '../screening-helper.service';

import { MovieFiltersComponent } from '../movie-filters/movie-filters.component';


@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, RouterModule, ScreeningPipe, MatButtonModule, MatInputModule, MatSelectModule, MovieFiltersComponent, NgClass],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss'
})
export class MoviesPageComponent {
  movies: Movie[] = [];
  genres: string[] = [];
  filteredMovies: Movie[] = [];
  dayFilter: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService, public screeningHelper: ScreeningHelperService) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ movies, genres }) => { 
      this.movies = movies; 
      this.genres = genres;
    });
  }

 filterList(filteredList: {fMovies: Movie[], dayFilter: number}) {
    this.filteredMovies = filteredList.fMovies;
    this.dayFilter = filteredList.dayFilter;
  }
}

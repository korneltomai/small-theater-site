import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common'

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ScreeningHelperService } from '../screening-helper.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-filters',
  standalone: true,
  imports: [NgFor, MatInputModule, MatSelectModule],
  templateUrl: './movie-filters.component.html',
  styleUrl: './movie-filters.component.scss'
})
export class MovieFiltersComponent {
  @Input() movies: Movie[] = [];
  @Input() genres: string[] = [];

  @Output() newFilterEvent = new EventEmitter<{fMovies: Movie[], dayFilter: number}>();

  

  constructor(public screeningHelper: ScreeningHelperService) {}

  ngOnInit(): void {
    this.search();
  }

  search(titleFilter: string = "", genreFilter: string = "All genre", dayFilter: number = 0) {

    let filteredMovies = this.movies.filter(movie => {
      return (titleFilter === "" || movie.title.toLowerCase().includes(titleFilter.trim().toLowerCase())) &&
      (genreFilter === "All genre" || movie.genres.find(genre => genre.toLowerCase() == genreFilter.trim().toLowerCase())) &&
      movie.screenings.find(screening => this.screeningHelper.screeningFilter(screening, dayFilter))
    });

    this.newFilterEvent.emit({fMovies: filteredMovies, dayFilter: dayFilter});
  }
}

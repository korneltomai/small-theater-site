import { Component } from '@angular/core';
import { NgFor, NgIf, DatePipe} from '@angular/common'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Screening } from '../screening';
import { ScreeningPipe } from '../screenings.pipe';

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, RouterModule, ScreeningPipe, MatButtonModule],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss'
})
export class MoviesPageComponent {
  movies : Movie[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ movies }) => this.movies = movies );
  }

  screeningFilter(screening: Screening): boolean {
    let sDate = new Date(screening.date);
    let currentDate: Date = new Date("2024-05-01, 16:00");
    return sDate.getDate() === currentDate.getDate();
  }
}

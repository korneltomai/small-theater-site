import { Component, OnInit } from '@angular/core';
import { NgIf, DatePipe } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../movie';
import { MovieScreeningsComponent } from "../movie-screenings/movie-screenings.component";
import { Screening } from '../screening';
@Component({
    selector: 'app-movie-page',
    standalone: true,
    templateUrl: './movie-page.component.html',
    styleUrl: './movie-page.component.scss',
    imports: [NgIf, DatePipe, MovieScreeningsComponent]
})
export class MoviePageComponent implements OnInit {
  
  movie: Movie = {
    id: 0,
    title: '',
    description: '',
    releaseTime: '',
    director: '',
    genres: [],
    runningTime: 0,
    imagePath: '',
    url: ''
  };

  screenings: Screening[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.data.subscribe(({ movie, screenings }) => {
      if (!movie) 
        this.router.navigate(['whats-on']);
      else {
        this.movie = movie; 
        this.screenings = screenings;
      }
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss'
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

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) {}

  ngOnInit() {
    this.route.data.subscribe(({ movie }) => {
      if (!movie) 
        this.router.navigate(['whats-on']);
      else 
        this.movie = movie; 
    })
  }
}

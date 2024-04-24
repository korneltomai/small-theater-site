import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  readonly baseUrl = "../assets";

  createDb() {
    const movies = [
      {
        "id": 1,
        "title": "Movie1",
        "description": "This is movie1.",
        "releaseYear": 2024,
        "director": "Johnny John",
        "genres": ["Action", "Drama", "Thriller"],
        "length": 25,
        "imagePath": `${this.baseUrl}/movie.png`
      },
      {
        "id": 2,
        "title": "Movie2",
        "description": "This is movie2.",
        "releaseYear": 2020,
        "director": "Adam Smith",
        "genres": ["Action", "Drama"],
        "length": 45,
        "imagePath": `${this.baseUrl}/movie.png`
      },
      {
        "id": 3,
        "title": "Movie3",
        "description": "This is movie3.",
        "releaseYear": 2014,
        "director": "Johnny John",
        "genres": ["Drama", "Thriller"],
        "length": 100,
        "imagePath": `${this.baseUrl}/movie.png`
      },
      {
        "id": 4,
        "title": "Movie4",
        "description": "This is movie4.",
        "releaseYear": 2022,
        "director": "Peter Parker",
        "genres": ["Thriller"],
        "length": 12,
        "imagePath": `${this.baseUrl}/movie.png`
      },
      {
        "id": 5,
        "title": "Movie5",
        "description": "This is movie5.",
        "releaseYear": 2018,
        "director": "Erica Ludendorf",
        "genres": ["Action", "Comedy"],
        "length": 30,
        "imagePath": `${this.baseUrl}/movie.png`
      }
    ];
    return {movies};
  }
}

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      {
        "id": 1,
        "title": "Movie1",
        "description": "This is movie1.",
        "releaseYear": 2024,
        "director": "Johnny John",
        "genres": ["action", "drama", "thriller"],
        "length": 25
      },
      {
        "id": 2,
        "title": "Movie2",
        "description": "This is movie2.",
        "releaseYear": 2020,
        "director": "Adam Smith",
        "genres": ["action", "drama"],
        "length": 45
      },
      {
        "id": 3,
        "title": "Movie3",
        "description": "This is movie3.",
        "releaseYear": 2014,
        "director": "Johnny John",
        "genres": ["drama", "thriller"],
        "length": 100
      },
      {
        "id": 4,
        "title": "Movie4",
        "description": "This is movie4.",
        "releaseYear": 2022,
        "director": "Peter Parker",
        "genres": ["thriller"],
        "length": 12
      },
      {
        "id": 5,
        "title": "Movie5",
        "description": "This is movie5.",
        "releaseYear": 2018,
        "director": "Erica Ludendorf",
        "genres": ["action", "comedy"],
        "length": 30
      }
    ];
    return {movies};
  }
}

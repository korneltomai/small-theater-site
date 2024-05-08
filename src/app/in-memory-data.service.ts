import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

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
        "releaseTime": "2024-1-1",
        "director": "Johnny John",
        "genres": ["Action", "Drama", "Thriller"],
        "runningTime": 25,
        "imagePath": `${this.baseUrl}/movie.png`,
        "url": "movie-1"
      },
      {
        "id": 2,
        "title": "Movie2",
        "description": "This is movie2.",
        "releaseTime": "2020-1-1",
        "director": "Adam Smith",
        "genres": ["Action", "Drama"],
        "runningTime": 45,
        "imagePath": `${this.baseUrl}/movie.png`,
        "url": "movie-2"
      },
      {
        "id": 3,
        "title": "Movie3",
        "description": "This is movie3.",
        "releaseTime": "2014-1-1",
        "director": "Johnny John",
        "genres": ["Drama", "Thriller"],
        "runningTime": 100,
        "imagePath": `${this.baseUrl}/movie.png`,
        "url": "movie-3"
      },
      {
        "id": 4,
        "title": "Movie4",
        "description": "This is movie4.",
        "releaseTime": "2022-1-1",
        "director": "Peter Parker",
        "genres": ["Thriller"],
        "runningTime": 12,
        "imagePath": `${this.baseUrl}/movie.png`,
        "url": "movie-4"
      },
      {
        "id": 5,
        "title": "Movie5",
        "description": "This is movie5.",
        "releaseTime": "2018-1-1",
        "director": "Erica Ludendorf",
        "genres": ["Action", "Comedy"],
        "runningTime": 30,
        "imagePath": `${this.baseUrl}/movie.png`,
        "url": "movie-5"
      }
    ];

    const screenings = [
      {
        "id": 1,
        "movieId": 1,
        "price": 5,
        "date": "2024-05-01, 15:00",
        "seats": []
      },
      {
        "id": 2,
        "movieId": 1,
        "price": 5,
        "date": "2024-05-01, 19:30",
        "seats": []
      },
      {
        "id": 3,
        "movieId": 1,
        "price": 5,
        "date": "2024-05-03, 09:00",
        "seats": []
      },
      {
        "id": 4,
        "movieId": 1,
        "price": 5,
        "date": "2024-05-03, 12:30",
        "seats": []
      },
      {
        "id": 5,
        "movieId": 1,
        "price": 5,
        "date": "2024-05-03, 16:30",
        "seats": []
      },
      {
        "id": 6,
        "movieId": 1,
        "price": 5,
        "date": "2024-05-03, 19:00",
        "seats": []
      },
      {
        "id": 7,
        "movieId": 1,
        "price": 5,
        "date": "2024-05-03, 21:00",
        "seats": []
      },
      {
        "id": 7,
        "movieId": 1,
        "price": 5,
        "date": "2024-05-04, 13:00",
        "seats": []
      }
    ];

    return {movies, screenings};
  }
}

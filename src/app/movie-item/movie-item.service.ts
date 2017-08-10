import { Injectable } from '@angular/core';
import { movies } from '../content/movie.mock-data';

let moviesPromise = Promise.resolve(movies);

@Injectable()
export class MovieService {
  getHeroes() { return moviesPromise; }

  getHero(id: number | string) {
    console.log('service', movies, id);
    return moviesPromise
      .then(movies => movies.find(movie => movie.id === +id));
  }
}

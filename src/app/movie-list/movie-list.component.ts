import { movies } from '../content/movie.mock-data';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})

export class MovieListComponent implements OnInit {

  movies: any[];
  searchMovie: String;
  foundMovie: any;

  constructor(private router: Router) {
    this.movies = movies;
  }

  onSelect(movie: any) {
    this.router.navigate(['/movies', movie.id]);
  }

  onSearch() {
    if(this.searchMovie) {
      this.foundMovie = this.movies.filter(movie => movie.name.toLowerCase() === this.searchMovie.toLowerCase());
    }

    if (this.foundMovie.length) {
      this.router.navigate(['/movies', this.foundMovie[0].id]);
    } else {
      this.router.navigate(['/no-found']);
    }
  }

  ngOnInit() {
  }
}

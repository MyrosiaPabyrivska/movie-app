import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent }    from './movie-list.component';
import { MovieItemComponent }  from '../movie-item/movie-item.component';

const heroesRoutes: Routes = [
  { path: 'movies',  component: MovieListComponent },
  { path: 'movies/:id', component: MovieItemComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MovieRoutingModule { }

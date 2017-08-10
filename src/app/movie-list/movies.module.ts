import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { MovieListComponent }    from './movie-list.component';
import { MovieItemComponent }  from '../movie-item/movie-item.component';

import { MovieService } from '../movie-item/movie-item.service';

import { MovieRoutingModule } from './movies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MovieRoutingModule
  ],
  declarations: [
    MovieListComponent,
    MovieItemComponent
  ],
  providers: [ MovieService ]
})
export class MoviesModule {}

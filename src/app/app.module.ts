import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MoviesModule }  from './movie-list/movies.module';

import { PageNotFoundComponent }   from './not-found.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule
   ],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { MovieService }  from './movie-item.service';

@Component({
  templateUrl: './movie-item.component.html'
})

export class MovieItemComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  movie: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
      .subscribe((movie: any) => this.movie = movie);
  }

  gotoHeroes() {
    this.router.navigate(['/movies']);
  }
}

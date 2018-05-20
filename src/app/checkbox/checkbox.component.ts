import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';

import {MoviesService} from '../movies.service';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit, OnDestroy {

  @Input() movie;
  sub: Subscription;
  sub1: Subscription;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {

  }

  onCheck() {
    if (this.movie.check) {
      this.sub = this.moviesService.addMovie(this.movie)
        .subscribe(data => {
          return data;
        });
    } else {
      this.sub1 = this.moviesService.deleteMovie(this.movie.imdbID)
        .subscribe(data => {
          return data;
        });
    }
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
    if (this.sub1) this.sub1.unsubscribe();
  }

}

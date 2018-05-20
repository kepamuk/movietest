import {Component, OnDestroy} from '@angular/core';
import {MoviesService} from '../movies.service';
import {combineLatest, Subscription} from 'rxjs/index';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy {

  movies = {};
  sub: Subscription;
  loading = false;

  constructor(private moviesService: MoviesService) {
  }

  onSearch(value) {
    this.loading = true;
    this.sub = combineLatest(
      this.moviesService.getMovies(value),
      this.moviesService.getListMovies()
    ).subscribe((data: any) => {
      if (data[0]['Search']) {
        data[0]['Search'].map((e) => {
          e.check = false;
          data[1].map((k) => {
            if (k.id === e.imdbID) e.check = true;
          });
        });
        this.movies = data[0];
      }
      this.loading = false;
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

}

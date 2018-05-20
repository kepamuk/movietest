import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies = [];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.moviesService.getListMovies()
      .subscribe((data: any) => {
        this.movies = data;
      });
  }

  onDelete(id) {
    this.moviesService.deleteMovie(id)
      .subscribe((data: any) => {
        this.movies = this.movies.filter(function (el) {
          return el.id !== id;
        });
        return data;
      });
  }

}

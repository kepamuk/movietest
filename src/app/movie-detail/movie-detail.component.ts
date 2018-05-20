import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie = {};

  constructor(private route: ActivatedRoute,
              private moviesService: MoviesService) {
    this.moviesService.getMovie(route.snapshot.params.id)
      .subscribe(data => {
        this.movie = data;
      });
  }

  ngOnInit() {
  }

}

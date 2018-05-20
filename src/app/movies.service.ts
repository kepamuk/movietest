import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlApi = 'http://www.omdbapi.com/?&apikey=a846c9dc';
  private urlbase = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {
  }

  getMovies(movie): Observable<any> {
    return this.http.get(`${this.urlApi}&s=${movie}`);
  }

  getMovie(id): Observable<any> {
    return this.http.get(`${this.urlApi}&i=${id}`);
  }

  getListMovies() {
    return this.http.get(this.urlbase);
  }

  addMovie(movie) {
    return this.http.post(this.urlbase, {id: movie.imdbID, movie});
  }

  deleteMovie(id) {
    return this.http.delete(`${this.urlbase}/${id}`);
  }

}

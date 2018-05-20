import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {SearchComponent} from './search/search.component';
import {MoviesListComponent} from './movies-list/movies-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'movies', component: MoviesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

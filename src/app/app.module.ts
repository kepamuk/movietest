import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatExpansionModule,
  MatInputModule, MatListModule, MatProgressBarModule,
  MatToolbarModule
} from '@angular/material';
import {HeaderComponent} from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from './search/search.component';
import {SearchInputComponent} from './search/search-input/search-input.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchListComponent} from './search/search-list/search-list.component';
import {AppRoutingModule} from './/app-routing.module';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {CheckboxComponent} from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchInputComponent,
    SearchListComponent,
    MoviesListComponent,
    MovieDetailComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatProgressBarModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

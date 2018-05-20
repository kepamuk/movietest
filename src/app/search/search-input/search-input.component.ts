import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  @Output() movie: EventEmitter<any> = new EventEmitter();
  @Input() movies;
  myControl: FormControl = new FormControl();
  sub: Subscription;

  constructor() {

  }

  ngOnInit() {
    this.sub = this.myControl.valueChanges.subscribe((val) => {
      this.movie.emit(val);
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

}
